<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-steps direction="vertical" :active="active">
          <el-step title="基本信息"></el-step>
          <el-step title="关联设备"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-form ref="form" :model="sgas" label-width="100px" :rules="rules">
            <el-card v-show="active === 0">
              <el-form-item label="资产类型">
                <el-select
                  @change="bsdtAstsChange"
                  v-model="sgas.sgas_bsdt_id"
                  placeholder="请选择资产类型"
                >
                  <el-option
                    v-for="s in bsdtAsts"
                    :label="s.bsdt_asts"
                    :key="s.id"
                    :value="s.id"
                  >{{s.bsdt_asts}}</el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="详细类型">
                <el-select v-model="sgas.sgas_bsdt_details" placeholder="请选择资产类型">
                  <el-option
                    v-for="d in bsdtDetails"
                    :label="d.bsdt_asts_details"
                    :value="d.bsdt_asts_details"
                    :key="d.bsdt_asts_details"
                  >{{d.bsdt_asts_details}}</el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="资产编号" prop="sgas_uid">
                <el-input v-model="sgas.sgas_uid"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="checkDuplicate">查重</el-button>
              </el-form-item>
              <!-- 状态0采购1库存2使用3返修4报废 -->
              <el-form-item label="资产状态">
                <el-radio-group v-model="sgas.sgas_status">
                  <el-radio :label="0">采购</el-radio>
                  <el-radio :label="1">库存</el-radio>
                  <el-radio :label="2">使用</el-radio>
                  <el-radio :label="3">返修</el-radio>
                  <el-radio :label="4">报废</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="使用人">
                <el-input v-model="sgas.sgas_owner"></el-input>
              </el-form-item>
              <el-form-item label="资产所在位置">
                <el-select v-model="sgas.sgas_location" placeholder="请选择资产所在位置">
                  <el-option label="零一广场" value="laptop"></el-option>
                  <el-option label="秦风阁" value="computer"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="采购日期">
                <el-date-picker type="date" placeholder="请选择采购日期" v-model="sgas.sgas_purchase_date"></el-date-picker>
              </el-form-item>
              <el-form-item label="入库日期">
                <el-date-picker type="date" placeholder="请选择入库日期" v-model="sgas.sgas_entry_date"></el-date-picker>
              </el-form-item>
              <el-form-item label="领用日期">
                <el-date-picker type="date" placeholder="请选择领用日期" v-model="sgas.sgas_receive_date"></el-date-picker>
              </el-form-item>
              <el-form-item label="是否拆机零件">
                <el-radio-group v-model="sgas.sgas_is_dismantled">
                  <el-radio :label="0">拆机</el-radio>
                  <el-radio :label="1">非拆机</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="拆机来源">
                <el-input v-model="sgas.sgas_dismantle_src"></el-input>
              </el-form-item>
            </el-card>
            <el-card v-show="active === 1">
              <el-form-item label="关联设备1">
                <el-input v-model="sgas.sgas_equipment1"></el-input>
              </el-form-item>
              <el-form-item label="关联设备2">
                <el-input v-model="sgas.sgas_equipment2"></el-input>
              </el-form-item>
              <el-form-item label="关联设备3">
                <el-input v-model="sgas.sgas_equipment3"></el-input>
              </el-form-item>
              <el-form-item label="关联设备4">
                <el-input v-model="sgas.sgas_equipment4"></el-input>
              </el-form-item>
              <el-form-item label="关联设备5">
                <el-input v-model="sgas.sgas_equipment5"></el-input>
              </el-form-item>
              <el-form-item label="关联设备6">
                <el-input v-model="sgas.sgas_equipment6"></el-input>
              </el-form-item>
              <el-form-item label="关联设备7">
                <el-input v-model="sgas.sgas_equipment7"></el-input>
              </el-form-item>
              <el-form-item label="关联设备8">
                <el-input v-model="sgas.sgas_equipment8"></el-input>
              </el-form-item>
              <el-form-item label="关联设备9">
                <el-input v-model="sgas.sgas_equipment9"></el-input>
              </el-form-item>
            </el-card>
            <el-card v-show="active === 5">
              <table border="1">
                <tr>
                  <td>资产类型</td>
                  <td colspan="2">{{sgas.sgas_bsdt_asts}}</td>
                  <td colspan="3">{{sgas.sgas_bsdt_id}}</td>
                </tr>
                <tr>
                  <td>详细类型</td>
                  <td colspan="5">{{sgas.sgas_bsdt_details}}</td>
                </tr>
                <tr>
                  <td>资产编号</td>
                  <td colspan="5">{{sgas.sgas_uid}}</td>
                </tr>
                <tr>
                  <td>资产状态</td>
                  <td colspan="5">{{sgas.sgas_status}}</td>
                </tr>
                <tr>
                  <td>使用人</td>
                  <td colspan="5">{{sgas.sgas_owner}}</td>
                </tr>
                <tr>
                  <td>资产位置</td>
                  <td colspan="5">{{sgas.sgas_location}}</td>
                </tr>
                <tr>
                  <td>采购日期</td>
                  <td colspan="5">{{sgas.sgas_purchase_date}}</td>
                </tr>
                <tr>
                  <td>入库日期</td>
                  <td colspan="5">{{sgas.sgas_entry_date}}</td>
                </tr>
                <tr>
                  <td>领用日期</td>
                  <td colspan="5">{{sgas.sgas_receive_date}}</td>
                </tr>
                <tr>
                  <td>关联资产</td>
                  <td>{{sgas.sgas_equipment1}}</td>
                  <td>{{sgas.sgas_equipment2}}</td>
                  <td>{{sgas.sgas_equipment3}}</td>
                  <td colspan="2">{{sgas.sgas_equipment4}}</td>
                </tr>
                <tr>
                  <td>关联资产</td>
                  <td>{{sgas.sgas_equipment5}}</td>
                  <td>{{sgas.sgas_equipment6}}</td>
                  <td>{{sgas.sgas_equipment7}}</td>
                  <td>{{sgas.sgas_equipment8}}</td>
                  <td>{{sgas.sgas_equipment9}}</td>
                </tr>
              </table>
            </el-card>
            <el-form-item>
              <el-button @click="last" v-show="active > 0">上一步</el-button>
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
      //从后台获取资产类型
      bsdtAsts: [],
      //获取详细资产类型
      bsdtDetails: [],
      sgas: {
        sgas_uid: "",
        sgas_status: 0,
        //详情
        sgas_bsdt_details: "",
        //id
        sgas_bsdt_id: "",
        //类型
        sgas_bsdt_asts: "",
        sgas_owner: "",
        sgas_location: "",
        sgas_purchase_date: "",
        sgas_entry_date: "",
        sgas_receive_date: "",
        sgas_is_dismantled: 1,
        sgas_dismantle_src: "",
        sgas_equipment1: "",
        sgas_equipment2: "",
        sgas_equipment3: "",
        sgas_equipment4: "",
        sgas_equipment5: "",
        sgas_equipment6: "",
        sgas_equipment7: "",
        sgas_equipment8: "",
        sgas_equipment9: ""
      },
      rules: {
        assetNum: [
          { required: true, message: "请输入资产编号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    //把表单内容更新到vuex
    sgas: {
      handler(val) {
        this.$store.commit("updateSgas", val);
        window.console.log(val);
        this.$store.dispatch("loadBsdtDetails");
      },
      deep: true
    },
    //从Vuex加载bsdtids
    "$store.state.inbound.checkBsdtAsts"() {
      if (!this.$store.state.inbound.updateBsdtAstsSuccess) {
        this.$notify({
          title: "加载失败",
          message: "资产类型加载失败！请检查网络！",
          type: "error"
        });
      }
      this.bsdtAsts = this.$store.state.inbound.bsdtAsts;
      window.console.warn(this.bsdtAsts);
      window.console.warn(this.$store.state.inbound.bsdtAsts);
    },
    "$store.state.inbound.checkBsdtDetails"() {
      if (!this.$store.state.inbound.updatebsdtDetailsSuccess) {
        this.$notify({
          title: "加载失败",
          message: "资产类型详情加载失败！请检查网络！",
          type: "error"
        });
      }
      this.bsdtDetails = this.$store.state.inbound.bsdtDetails;
    },
    "$store.state.inbound.checkCheckDunplicate"() {
      //检查是否成功
      if (!this.$store.state.inbound.updateCheckDuplicateSuccess) {
        this.$notify({
          title: "网络连接失败",
          message: "请检查网络连接！",
          type: "error"
        });
      }
      if(this.$store.state.inbound.isDuplicate){
        this.$notify({
          title: "重复！",
          message: "输入的资产编码已经存在！",
          type: "error"
        });
      }else{
        this.$notify({
          title: "通过检测！",
          message: "输入的资产编码可以使用！",
          type: "success"
        });
      }
    },
    "$store.state.inbound.checkInbound" () {
      let that = this;
      if (that.$store.state.inbound.updateInboundSuccess) {
        that.$notify({
          title: "插入成功！",
          message: "插入"+that.$store.state.inbound.affectedRows+"份资产！",
          type: "success"
        });
      }else{
this.$notify({
          title: "插入失败！",
          message: "请检查资产信息是否填写正确。",
          type: "error"
        });
      }
    }
  },
  methods: {
    next() {
      if (this.active++ > 1) this.active = 0;
    },
    last() {
      if (this.active-- < 0) this.active = 0;
    },
    submit() {
      this.$store.dispatch("inbound");
    },
    bsdtAstsChange() {
      let that = this;
      window.console.log(that.sgas.sgas_bsdt_asts);
      // that.$store.dispatch("loadBsdtDetails");
    },
    checkDuplicate () {
      this.$store.dispatch("checkDuplicate");
    }
  },
  mounted() {
    this.$store.dispatch("loadBsdtAsts");
  }
};
</script>

<style lang="less">
.el-steps {
  height: 50vh;
  margin: 5vh 0 0 0;
}
</style>