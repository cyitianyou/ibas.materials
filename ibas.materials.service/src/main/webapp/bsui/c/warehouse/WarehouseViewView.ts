/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace materials {
    export namespace ui {
        export namespace c {
            /**
             * 查看视图-仓库
             */
            export class WarehouseViewView extends ibas.BOViewView implements app.IWarehouseViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.form = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("materials_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_code") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/code"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_name") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/name"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_createdate") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/createDate",
                                type: "sap.ui.model.type.Date",
                                formatOptions: {
                                    style: "medium"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_createusersign") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/createUserSign"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_updatedate") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/updateDate",
                                type: "sap.ui.model.type.Date",
                                formatOptions: {
                                    style: "medium"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_updateusersign") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/updateUserSign"
                            }),

                            new sap.ui.core.Title("", { text: ibas.i18n.prop("materials_sys_information") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_activated") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/activated",
                                formatter(data: any): any {
                                    return ibas.enums.describe(ibas.emYesNo, data);
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_loginst") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/logInst"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_datasource") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/dataSource"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_series") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/series"
                            }),

                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_dataowner") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/dataOwner"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_organization") }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/organization"
                            }),
                        ]
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Bar("", {
                            contentLeft: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_edit"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://edit",
                                    press: function (): void {
                                        that.fireViewEvents(that.editDataEvent);
                                    }
                                })
                            ],
                            contentRight: [
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press: function (event: any): void {
                                        ibas.servicesManager.showServices({
                                            proxy: new ibas.BOListServiceProxy({
                                                data: (<any>that.form.getModel()).getObject(),
                                                converter: new bo.DataConverter(),
                                            }),
                                            displayServices(services: ibas.IServiceAgent[]): void {
                                                if (ibas.objects.isNull(services) || services.length === 0) {
                                                    return;
                                                }
                                                let popover: sap.m.Popover = new sap.m.Popover("", {
                                                    showHeader: false,
                                                    placement: sap.m.PlacementType.Bottom,
                                                });
                                                for (let service of services) {
                                                    popover.addContent(new sap.m.Button({
                                                        text: ibas.i18n.prop(service.name),
                                                        type: sap.m.ButtonType.Transparent,
                                                        icon: service.icon,
                                                        press: function (): void {
                                                            service.run();
                                                            popover.close();
                                                        }
                                                    }));
                                                }
                                                (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                popover.openBy(event.getSource(), true);
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        content: [this.form]
                    });
                    this.id = this.page.getId();
                    return this.page;
                }
                private page: sap.m.Page;
                private form: sap.ui.layout.form.SimpleForm;

                /** 显示数据 */
                showWarehouse(data: bo.Warehouse): void {
                    this.form.setModel(new sap.ui.model.json.JSONModel(data));
                }
            }
        }
    }
}