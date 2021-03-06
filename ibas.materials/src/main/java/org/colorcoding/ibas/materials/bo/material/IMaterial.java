package org.colorcoding.ibas.materials.bo.material;

import org.colorcoding.ibas.bobas.bo.IBOMasterData;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.materials.data.emItemType;

/**
 * 物料 接口
 * 
 */
public interface IMaterial extends IBOMasterData {

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	String getCode();

	/**
	 * 设置-编码
	 * 
	 * @param value
	 *            值
	 */
	void setCode(String value);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	String getName();

	/**
	 * 设置-名称
	 * 
	 * @param value
	 *            值
	 */
	void setName(String value);

	/**
	 * 获取-外文名称
	 * 
	 * @return 值
	 */
	String getForeignName();

	/**
	 * 设置-外文名称
	 * 
	 * @param value
	 *            值
	 */
	void setForeignName(String value);

	/**
	 * 获取-物料组
	 * 
	 * @return 值
	 */
	String getGroup();

	/**
	 * 设置-物料组
	 * 
	 * @param value
	 *            值
	 */
	void setGroup(String value);

	/**
	 * 获取-激活
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-激活
	 * 
	 * @param value
	 *            值
	 */
	void setActivated(emYesNo value);

	/**
	 * 获取-条形码
	 * 
	 * @return 值
	 */
	String getBarCode();

	/**
	 * 设置-条形码
	 * 
	 * @param value
	 *            值
	 */
	void setBarCode(String value);

	/**
	 * 获取-物料类型
	 * 
	 * @return 值
	 */
	emItemType getItemType();

	/**
	 * 设置-物料类型
	 * 
	 * @param value
	 *            值
	 */
	void setItemType(emItemType value);

	/**
	 * 获取-采购物料
	 * 
	 * @return 值
	 */
	emYesNo getPurchaseItem();

	/**
	 * 设置-采购物料
	 * 
	 * @param value
	 *            值
	 */
	void setPurchaseItem(emYesNo value);

	/**
	 * 获取-销售物料
	 * 
	 * @return 值
	 */
	emYesNo getSalesItem();

	/**
	 * 设置-销售物料
	 * 
	 * @param value
	 *            值
	 */
	void setSalesItem(emYesNo value);

	/**
	 * 获取-库存物料
	 * 
	 * @return 值
	 */
	emYesNo getInventoryItem();

	/**
	 * 设置-库存物料
	 * 
	 * @param value
	 *            值
	 */
	void setInventoryItem(emYesNo value);

	/**
	 * 获取-虚拟物料
	 * 
	 * @return 值
	 */
	emYesNo getPhantomItem();

	/**
	 * 设置-虚拟物料
	 * 
	 * @param value
	 *            值
	 */
	void setPhantomItem(emYesNo value);

	/**
	 * 获取-固定资产
	 * 
	 * @return 值
	 */
	emYesNo getFixedAssets();

	/**
	 * 设置-固定资产
	 * 
	 * @param value
	 *            值
	 */
	void setFixedAssets(emYesNo value);

	/**
	 * 获取-缺省仓库
	 * 
	 * @return 值
	 */
	String getDefaultWarehouse();

	/**
	 * 设置-缺省仓库
	 * 
	 * @param value
	 *            值
	 */
	void setDefaultWarehouse(String value);

	/**
	 * 获取-首选供应商
	 * 
	 * @return 值
	 */
	String getPreferredVendor();

	/**
	 * 设置-首选供应商
	 * 
	 * @param value
	 *            值
	 */
	void setPreferredVendor(String value);

	/**
	 * 获取-库存单位
	 * 
	 * @return 值
	 */
	String getInventoryUOM();

	/**
	 * 设置-库存单位
	 * 
	 * @param value
	 *            值
	 */
	void setInventoryUOM(String value);

	/**
	 * 获取-价格
	 * 
	 * @return 值
	 */
	Decimal getAvgPrice();

	/**
	 * 设置-价格
	 * 
	 * @param value
	 *            值
	 */
	void setAvgPrice(Decimal value);

	/**
	 * 设置-价格
	 * 
	 * @param value
	 *            值
	 */
	void setAvgPrice(String value);

	/**
	 * 设置-价格
	 * 
	 * @param value
	 *            值
	 */
	void setAvgPrice(int value);

	/**
	 * 设置-价格
	 * 
	 * @param value
	 *            值
	 */
	void setAvgPrice(double value);

	/**
	 * 获取-库存
	 * 
	 * @return 值
	 */
	Decimal getOnHand();

	/**
	 * 设置-库存
	 * 
	 * @param value
	 *            值
	 */
	void setOnHand(Decimal value);

	/**
	 * 设置-库存
	 * 
	 * @param value
	 *            值
	 */
	void setOnHand(String value);

	/**
	 * 设置-库存
	 * 
	 * @param value
	 *            值
	 */
	void setOnHand(int value);

	/**
	 * 设置-库存
	 * 
	 * @param value
	 *            值
	 */
	void setOnHand(double value);

	/**
	 * 获取-已承诺
	 * 
	 * @return 值
	 */
	Decimal getOnCommited();

	/**
	 * 设置-已承诺
	 * 
	 * @param value
	 *            值
	 */
	void setOnCommited(Decimal value);

	/**
	 * 设置-已承诺
	 * 
	 * @param value
	 *            值
	 */
	void setOnCommited(String value);

	/**
	 * 设置-已承诺
	 * 
	 * @param value
	 *            值
	 */
	void setOnCommited(int value);

	/**
	 * 设置-已承诺
	 * 
	 * @param value
	 *            值
	 */
	void setOnCommited(double value);

	/**
	 * 获取-已订购
	 * 
	 * @return 值
	 */
	Decimal getOnOrdered();

	/**
	 * 设置-已订购
	 * 
	 * @param value
	 *            值
	 */
	void setOnOrdered(Decimal value);

	/**
	 * 设置-已订购
	 * 
	 * @param value
	 *            值
	 */
	void setOnOrdered(String value);

	/**
	 * 设置-已订购
	 * 
	 * @param value
	 *            值
	 */
	void setOnOrdered(int value);

	/**
	 * 设置-已订购
	 * 
	 * @param value
	 *            值
	 */
	void setOnOrdered(double value);

	/**
	 * 获取-最低库存量
	 * 
	 * @return 值
	 */
	Decimal getMinimumInventory();

	/**
	 * 设置-最低库存量
	 * 
	 * @param value
	 *            值
	 */
	void setMinimumInventory(Decimal value);

	/**
	 * 设置-最低库存量
	 * 
	 * @param value
	 *            值
	 */
	void setMinimumInventory(String value);

	/**
	 * 设置-最低库存量
	 * 
	 * @param value
	 *            值
	 */
	void setMinimumInventory(int value);

	/**
	 * 设置-最低库存量
	 * 
	 * @param value
	 *            值
	 */
	void setMinimumInventory(double value);

	/**
	 * 获取-序号管理
	 * 
	 * @return 值
	 */
	emYesNo getSerialManagement();

	/**
	 * 设置-序号管理
	 * 
	 * @param value
	 *            值
	 */
	void setSerialManagement(emYesNo value);

	/**
	 * 获取-批号管理
	 * 
	 * @return 值
	 */
	emYesNo getBatchManagement();

	/**
	 * 设置-批号管理
	 * 
	 * @param value
	 *            值
	 */
	void setBatchManagement(emYesNo value);

	/**
	 * 获取-生效日期
	 * 
	 * @return 值
	 */
	DateTime getValidDate();

	/**
	 * 设置-生效日期
	 * 
	 * @param value
	 *            值
	 */
	void setValidDate(DateTime value);

	/**
	 * 获取-失效日期
	 * 
	 * @return 值
	 */
	DateTime getInvalidDate();

	/**
	 * 设置-失效日期
	 * 
	 * @param value
	 *            值
	 */
	void setInvalidDate(DateTime value);

	/**
	 * 获取-图片
	 * 
	 * @return 值
	 */
	String getPicture();

	/**
	 * 设置-图片
	 * 
	 * @param value
	 *            值
	 */
	void setPicture(String value);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	String getRemarks();

	/**
	 * 设置-备注
	 * 
	 * @param value
	 *            值
	 */
	void setRemarks(String value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value
	 *            值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	emYesNo getDeleted();

	/**
	 * 设置-已删除
	 * 
	 * @param value
	 *            值
	 */
	void setDeleted(emYesNo value);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
	 */
	void setDocEntry(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value
	 *            值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value
	 *            值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value
	 *            值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-修改日期
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-修改时间
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-版本
	 * 
	 * @param value
	 *            值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	Integer getSeries();

	/**
	 * 设置-服务系列
	 * 
	 * @param value
	 *            值
	 */
	void setSeries(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value
	 *            值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value
	 *            值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-修改用户
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	emApprovalStatus getApprovalStatus();

	/**
	 * 设置-审批状态
	 * 
	 * @param value
	 *            值
	 */
	void setApprovalStatus(emApprovalStatus value);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	Integer getDataOwner();

	/**
	 * 设置-数据所有者
	 * 
	 * @param value
	 *            值
	 */
	void setDataOwner(Integer value);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	String getOrganization();

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value
	 *            值
	 */
	void setOrganization(String value);

}
