/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace materials {
    export namespace app {
        /** 编辑应用-物料 */
        export class MaterialEditApp extends ibas.BOEditApplication<IMaterialEditView, bo.Material> {
            /** 应用标识 */
            static APPLICATION_ID: string = "2e111fbc-ecb0-477f-bdeb-894cefa6f96d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "materials_app_material_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Material.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = MaterialEditApp.APPLICATION_ID;
                this.name = MaterialEditApp.APPLICATION_NAME;
                this.boCode = MaterialEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseMaterialWarehouseEvent = this.chooseMaterialWarehouse;
                this.view.chooseMaterialGroupEvent = this.chooseMaterialGroup;
                this.view.uploadPictureEvent = this.uploadPicture;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Material();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showMaterial(this.editData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Material): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Material)) {
                    let data: bo.Material = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.editData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryMaterials = new bo.BORepositoryMaterials();
                        boRepository.fetchMaterial({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Material>): void {
                                let data: bo.Material;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Material)) {
                                    // 查询到了有效数据
                                    that.editData = data;
                                    that.show();
                                } else {
                                    // 数据重新检索无效
                                    that.messages({
                                        type: ibas.emMessageType.WARNING,
                                        message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                        onCompleted(): void {
                                            that.show();
                                        }
                                    });
                                }
                            }
                        });
                        // 开始查询数据
                        return;
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 待编辑的数据 */
            protected editData: bo.Material;
            /** 保存数据 */
            protected saveData(): void {
                let that: this = this;
                let boRepository: bo.BORepositoryMaterials = new bo.BORepositoryMaterials();
                boRepository.saveMaterial({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Material>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.editData = undefined;
                            } else {
                                // 替换编辑对象
                                that.editData = opRslt.resultObjects.firstOrDefault();
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            // 刷新当前视图
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.busy(true);
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            that.editData.delete();
                            that.saveData();
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.Material();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }

            /** 选择物料缺省仓库事件 */
            chooseMaterialWarehouse(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Warehouse>({
                    boCode: bo.Warehouse.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Warehouse.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Warehouse>): void {
                        let selected: bo.Warehouse = selecteds.firstOrDefault();
                        that.editData.defaultWarehouse = selected.code;
                    }
                });
            }
            /** 选择物料组事件 */
            chooseMaterialGroup(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.MaterialGroup>({
                    boCode: bo.MaterialGroup.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [],
                    onCompleted(selecteds: ibas.IList<bo.MaterialGroup>): void {
                        let selected: bo.MaterialGroup = selecteds.firstOrDefault();
                        that.editData.group = selected.code;
                    }
                });
            }
            /** 上传图片事件 */
            uploadPicture(formData: FormData): void {
                let that: this = this;
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_uploading_file"));
                this.busy(true);
                let boRepository: bo.BORepositoryMaterials = new bo.BORepositoryMaterials();
                boRepository.upload({
                    fileData: formData,
                    onCompleted(opRslt: ibas.IOperationResult<ibas.FileData>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.proceeding(ibas.emMessageType.INFORMATION,
                                ibas.i18n.prop("shell_upload") + ibas.i18n.prop("shell_sucessful"));
                            let fileData: ibas.FileData = opRslt.resultObjects.firstOrDefault();
                            that.editData.picture = fileData.fileName;
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
            }
        }
        /** 视图-物料 */
        export interface IMaterialEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterial(data: bo.Material): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择物料缺省仓库事件 */
            chooseMaterialWarehouseEvent: Function;
            /** 选择物料组事件 */
            chooseMaterialGroupEvent: Function;
            /** 上传图片事件 */
            uploadPictureEvent: Function;
        }
    }
}