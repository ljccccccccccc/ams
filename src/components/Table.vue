<template>
  <el-table :data="tableData" style="width: 100%" stripe>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="资产类型">
            <span>{{ props.row.asts_type }}</span>
          </el-form-item>
          <el-form-item label="资产状态">
            <span>
              <el-tag
                effect="dark"
                :type="props.row.bsdt_status == 0 ? 'success' : 'danger'"
              >{{props.row.bsdt_status == 0 ? '使用中' : '返修'}}</el-tag>
            </span>
          </el-form-item>
          <el-form-item label="资产所有者">
            <span>{{ props.row.sgas_owner }}</span>
          </el-form-item>
          <el-form-item label="型号">
            <span>{{ props.row.bsdt_brand + props.row.bsdt_series + props.row.bsdt_type}}</span>
          </el-form-item>
          <el-form-item label="关键属性1">
            <span>{{ props.row.bsdt_attr1}}</span>
          </el-form-item>
          <el-form-item label="关键属性2">
            <span>{{ props.row.bsdt_attr2 }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="资产类型"
      prop="asts_type"
      :filters="[{ text: '笔记本电脑', value: '笔记本电脑' }, { text: '显示屏', value: '显示屏' }]"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column label="状态">
      <el-tag type="success" effect="dark" prop="bsdt_status">使用中</el-tag>
    </el-table-column>
    <el-table-column label="所有者" prop="sgas_owner" ></el-table-column>
    <el-table-column label="品牌" prop="bsdt_brand" ></el-table-column>
    <el-table-column label="操作">
      <el-button>编辑</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<style lang="less">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table{
  width: 100%;
  height: auto;
  overflow-y: auto;
}
</style>

<script>
export default {
  name: "kingorld_table",
  data() {
    return {
      tableData: [
        {
          sgas_uid: "NSG001547",
          asts_type: "笔记本电脑",
          bsdt_status: 0,
          sgas_owner: "王小虎",
          bsdt_brand: "联想",
          bsdt_series: "X",
          bsdt_type: "270",
          bsdt_attr1: "i7-6700H",
          bsdt_attr2: "GTX-1060"
        },
        {
          sgas_uid: "NSG001284",
          asts_type: "笔记本电脑",
          bsdt_status: 1,
          sgas_owner: "周成",
          bsdt_brand: "惠普",
          bsdt_series: "HPF",
          bsdt_type: "2341",
          bsdt_attr1: "i5-4420U",
          bsdt_attr2: ""
        },
        {
          sgas_uid: "NSG058247",
          asts_type: "服务器",
          bsdt_status: 0,
          sgas_owner: "李喆",
          bsdt_brand: "金品",
          bsdt_series: "KU",
          bsdt_type: "4200-X3",
          bsdt_attr1:
            "Intel® Xeon® Platinum/Gold/Silver/Bronze 系列可扩展处理器（TDP 140W）",
          bsdt_attr2:
            "8个 DIMM插槽, 支持2TB DDR4 3DS ECC RDIMM 2400/2666/2933 内存"
        },
        {
          sgas_uid: "NSG071542",
          asts_type: "显示屏",
          bsdt_status: 0,
          sgas_owner: "李强国",
          bsdt_brand: "LG",
          bsdt_series: "27",
          bsdt_type: "GL850",
          bsdt_attr1: "27",
          bsdt_attr2: "144"
        }
      ]
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>