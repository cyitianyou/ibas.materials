/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    BusinessObject,
    BusinessObjects,
    BOMasterData,
    BOMasterDataLine,
    BODocument,
    BODocumentLine,
    BOSimple,
    BOSimpleLine,
    strings, config,
    BO_PROPERTY_NAME_DOCENTRY,
    BO_PROPERTY_NAME_LINEID,
    BO_PROPERTY_NAME_OBJECTCODE,
} from "ibas/index";
import {
    BO_CODE_MATERIALSERIALITEM,
} from "../Datas";
import {
    IMaterialSerialItem,
    IMaterialSerialItems,
    IMaterialSerialItemParent,
} from "./MaterialSerialItem.d";

/** 物料序列号项目 */
export class MaterialSerialItem extends BOSimple<MaterialSerialItem> implements IMaterialSerialItem {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = BO_CODE_MATERIALSERIALITEM;
    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-物料编码 */
    static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
    /** 获取-物料编码 */
    get itemCode(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_ITEMCODE_NAME);
    }
    /** 设置-物料编码 */
    set itemCode(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_ITEMCODE_NAME, value);
    }

    /** 映射的属性名称-序列编码 */
    static PROPERTY_SERIALCODE_NAME: string = "SerialCode";
    /** 获取-序列编码 */
    get serialCode(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_SERIALCODE_NAME);
    }
    /** 设置-序列编码 */
    set serialCode(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_SERIALCODE_NAME, value);
    }

    /** 映射的属性名称-仓库编码 */
    static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
    /** 获取-仓库编码 */
    get warehouse(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_WAREHOUSE_NAME);
    }
    /** 设置-仓库编码 */
    set warehouse(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_WAREHOUSE_NAME, value);
    }

    /** 映射的属性名称-基于类型 */
    static PROPERTY_DOCUMENTTYPE_NAME: string = "DocumentType";
    /** 获取-基于类型 */
    get documentType(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_DOCUMENTTYPE_NAME);
    }
    /** 设置-基于类型 */
    set documentType(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_DOCUMENTTYPE_NAME, value);
    }

    /** 映射的属性名称-基于标识 */
    static PROPERTY_DOCUMENTENTRY_NAME: string = "DocumentEntry";
    /** 获取-基于标识 */
    get documentEntry(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_DOCUMENTENTRY_NAME);
    }
    /** 设置-基于标识 */
    set documentEntry(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_DOCUMENTENTRY_NAME, value);
    }

    /** 映射的属性名称-基于行号 */
    static PROPERTY_DOCUMENTLINEID_NAME: string = "DocumentLineId";
    /** 获取-基于行号 */
    get documentLineId(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_DOCUMENTLINEID_NAME);
    }
    /** 设置-基于行号 */
    set documentLineId(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_DOCUMENTLINEID_NAME, value);
    }

    /** 映射的属性名称-对象编号 */
    static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
    /** 获取-对象编号 */
    get objectKey(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_OBJECTKEY_NAME);
    }
    /** 设置-对象编号 */
    set objectKey(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_OBJECTKEY_NAME, value);
    }

    /** 映射的属性名称-对象类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-对象类型 */
    get objectCode(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-对象类型 */
    set objectCode(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-实例号 */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-实例号 */
    get logInst(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_LOGINST_NAME);
    }
    /** 设置-实例号 */
    set logInst(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(MaterialSerialItem.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(MaterialSerialItem.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-更新日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-更新日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(MaterialSerialItem.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-更新日期 */
    set updateDate(value: Date) {
        this.setProperty(MaterialSerialItem.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-更新时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-更新时间 */
    get updateTime(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-更新时间 */
    set updateTime(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-更新用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-更新用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(MaterialSerialItem.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-更新用户 */
    set updateUserSign(value: number) {
        this.setProperty(MaterialSerialItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(MaterialSerialItem.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(MaterialSerialItem.PROPERTY_UPDATEACTIONID_NAME, value);
    }

    /** 初始化数据 */
    protected init(): void {
        this.objectCode = config.applyVariables(MaterialSerialItem.BUSINESS_OBJECT_CODE);
    }
}



/** 物料序列记录集合 */
export class MaterialSerialItems
    extends BusinessObjects<IMaterialSerialItem, IMaterialSerialItemParent>
    implements IMaterialSerialItems {
    /** 创建并添加子项 */
    create(): MaterialSerialItem {
        let item: MaterialSerialItem = new MaterialSerialItem();
        this.add(item);
        return item;
    }
    afterAdd(item: MaterialSerialItem): void {
        super.afterAdd(item);
        item.documentType = this.parent.objectCode;
        item.documentEntry = this.parent.docEntry;
        item.documentLineId = this.parent.lineId;
        item.itemCode = this.parent.itemCode;
        item.warehouse = this.parent.warehouse;
    }
    /**
     * 父项单据行发生改变
     */
    onParentPropertyChanged(name: string): void {
        if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_OBJECTCODE)) {
            for (let item of this) {
                item.documentType = this.parent.objectCode;
            }
        } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_DOCENTRY)) {
            for (let item of this) {
                item.documentEntry = this.parent.docEntry;
            }
        } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_LINEID)) {
            for (let item of this) {
                item.documentLineId = this.parent.lineId;
            }
        }
    }
    /** 总计 */
    total(): number {
        let total: number = 0;
        for (let item of this) {
            if (item.isDeleted) {
                continue;
            }
            total += 1;
        }
        return total;
    }
}