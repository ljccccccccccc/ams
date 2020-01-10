<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-steps direction="vertical" :active="active">
          <el-step title="基础数据"></el-step>
          <el-step title="额外信息" description="检查好就可以提交啦！"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-form>
            <el-card v-show="active === 0">
              <el-form :model="basicData" label-width="100px" :rules="rules">
                <el-form-item label="资产类型" prop="bsdt_asts">
                  <el-input v-model="basicData.bsdt_asts"></el-input>
                </el-form-item>
                <el-form-item label="详细类型">
                  <el-input v-model="basicData.bsdt_asts_details"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                  <el-radio-group v-model="basicData.bsdt_status">
                    <el-radio :label="0">启用</el-radio>
                    <el-radio :label="1">失效</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="使用寿命">
                  <el-input v-model="basicData.bsdt_lifetime"></el-input>
                </el-form-item>
                <el-form-item label="品牌">
                  <el-input v-model="basicData.bsdt_brand"></el-input>
                </el-form-item>
                <el-form-item label="系列">
                  <el-input v-model="basicData.bsdt_series"></el-input>
                </el-form-item>
                <el-form-item label="型号">
                  <el-input v-model="basicData.bsdt_type"></el-input>
                </el-form-item>
                <el-form-item label="参考价格">
                  <el-input v-model="basicData.bsdt_price"></el-input>
                </el-form-item>
                <el-form-item label="供应商">
                  <el-radio-group v-model="basicData.bsdt_supplier">
                    <el-radio
                      :label="s.splr_id"
                      v-for="s in supplier"
                      :key="s.splr_id"
                    >{{s.splr_name + ' | ' + s.splr_brand}}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </el-card>
            <el-card v-show="active === 1">
              <el-form label-width="100px">
                <el-form-item label="关键属性1">
                  <el-input v-model="basicData.bsdt_attr1"></el-input>
                </el-form-item>
                <el-form-item label="关键属性2">
                  <el-input v-model="basicData.bsdt_attr2"></el-input>
                </el-form-item>
                <el-form-item label="关键属性3">
                  <el-input v-model="basicData.bsdt_attr3"></el-input>
                </el-form-item>
                <el-form-item label="关键属性4">
                  <el-input v-model="basicData.bsdt_attr4"></el-input>
                </el-form-item>
                <el-form-item label="关键属性5">
                  <el-input v-model="basicData.bsdt_attr5"></el-input>
                </el-form-item>
                <el-form-item label="关键属性6">
                  <el-input v-model="basicData.bsdt_attr6"></el-input>
                </el-form-item>
                <el-form-item label="关键属性7">
                  <el-input v-model="basicData.bsdt_attr7"></el-input>
                </el-form-item>
                <el-form-item label="关键属性8">
                  <el-input v-model="basicData.bsdt_attr8"></el-input>
                </el-form-item>
                <el-form-item label="关键属性9">
                  <el-input v-model="basicData.bsdt_attr9"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
            <el-card v-show="active === 5">
              <table border="1">
                <tr>
                  <td>资产类型</td>
                  <td colspan="5">{{basicData.bsdt_asts}}</td>
                </tr>
                <tr>
                  <td>资产状态</td>
                  <td colspan="5">{{basicData.bsdt_status}}</td>
                </tr>
                <tr>
                  <td>品牌</td>
                  <td colspan="5">{{basicData.bsdt_brand}}</td>
                </tr>
                <tr>
                  <td>系列</td>
                  <td colspan="5">{{basicData.bsdt_series}}</td>
                </tr>
                <tr>
                  <td>型号</td>
                  <td colspan="5">{{basicData.bsdt_type}}</td>
                </tr>
                <tr>
                  <td>使用寿命</td>
                  <td colspan="5">{{basicData.bsdt_lifetime}}</td>
                </tr>
                <tr>
                  <td>参考价格</td>
                  <td colspan="5">{{basicData.bsdt_price}}</td>
                </tr>
                <tr>
                  <td>关键属性</td>
                  <td>{{basicData.bsdt_attr1}}</td>
                  <td>{{basicData.bsdt_attr2}}</td>
                  <td>{{basicData.bsdt_attr3}}</td>
                  <td colspan="2">{{basicData.bsdt_attr4}}</td>
                </tr>
                <tr>
                  <td>关键属性</td>
                  <td>{{basicData.bsdt_attr5}}</td>
                  <td>{{basicData.bsdt_attr6}}</td>
                  <td>{{basicData.bsdt_attr7}}</td>
                  <td>{{basicData.bsdt_attr8}}</td>
                  <td>{{basicData.bsdt_attr9}}</td>
                </tr>
              </table>
            </el-card>
            <el-form-item>
              <el-button @click="last">上一步</el-button>
              <el-button type="primary" @click="next" v-show="active < 1">下一步</el-button>
              <el-button type="primary" @click="submit" v-show="active === 1">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "IndexInbound",
  components: {},
  data() {
    return {
      active: 0,
      supplier: [],
      basicData: {
        bsdt_asts: "",
        bsdt_asts_details: "",
        bsdt_status: 0,
        bsdt_lifetime: "",
        bsdt_brand: "",
        bsdt_series: "",
        bsdt_type: "",
        bsdt_price: "",
        bsdt_supplier: "",
        bsdt_attr1: "",
        bsdt_attr2: "",
        bsdt_attr3: "",
        bsdt_attr4: "",
        bsdt_attr5: "",
        bsdt_attr6: "",
        bsdt_attr7: "",
        bsdt_attr8: "",
        bsdt_attr9: ""
      },
      rules: {
        bsdt_asts: [
          { required: true, message: "请输入资产类型", trigger: "blur" }
        ],
        bsdt_status: [
          { required: true, message: "请选择资产的状态", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    basicData: {
      handler(val) {
        window.console.warn(val);
        this.$store.commit("updateBasicData", val);
      },
      deep: true
    },
    "$store.state.addBasicData.checkSupplier"() {
      if (!this.$store.state.addBasicData.supplierSuccess) {
        this.$notify({
          title: "加载失败",
          message: "供应商信息加载失败！请检查网络！",
          type: "error"
        });
      }
      this.supplier = this.$store.state.addBasicData.supplier;
    },
    "$store.state.addBasicData.check"() {
      window.console.log(this.$store.state.addBasicData.addBasicDataSuccess);
      if (this.$store.state.addBasicData.addBasicDataSuccess) {
        this.basicData = {
          bsdt_asts: "",
          bsdt_status: 0,
          bsdt_lifetime: "",
          bsdt_brand: "",
          bsdt_series: "",
          bsdt_type: "",
          bsdt_price: "",
          bsdt_supplier: "",
          bsdt_attr1: "",
          bsdt_attr2: "",
          bsdt_attr3: "",
          bsdt_attr4: "",
          bsdt_attr5: "",
          bsdt_attr6: "",
          bsdt_attr7: "",
          bsdt_attr8: "",
          bsdt_attr9: ""
        };
        this.active = 0;
        this.$notify({
          title: "成功",
          message: `添加资产类型成功！共添加${this.$store.state.addBasicData.affectedRows}个资产类型！`,
          type: "success"
        });
      } else {
        this.active = 0;
        this.$notify({
          title: "失败",
          message: "添加资产类型失败！",
          type: "error"
        });
      }
    }
  },
  methods: {
    next() {
      if (this.active++ >= 2) this.active = 0;
    },
    last() {
      if (this.active-- < 0) this.active = 0;
    },
    submit() {
      this.$store.dispatch("addBasicData");
    }
  },
  mounted() {
    this.$store.dispatch("loadSupplier");
  }
};
</script>

<style lang="less">
.el-steps {
  height: 50vh;
  margin: 5vh 0 0 0;
}
.kingorld-result span {
  color: rgba(217, 116, 43, 1);
  font-size: 1.2em;
}
// .el-card table {
//   font-size: 11px;
//   color: #333333;
//   border-width: 1px;
//   border-color: #666666;
//   border-collapse: collapse;
// }
// .el-card table tr td:nth-of-type(1) {
//   border-width: 1px;
//   padding: 8px;
//   border-style: solid;
//   border-color: #666666;
//   background-color: #dedede;
// }
// .el-card table tr td {
//   border-width: 1px;
//   padding: 8px;
//   border-style: solid;
//   border-color: #666666;
//   background-color: #ffffff;
// }
</style>