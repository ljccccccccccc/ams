<template>
  <div>
    <el-card>
      <el-form inline>
        <el-form-item>
          <el-select v-model="search.searchType">
            <el-option v-for="a in searchOptions" :key="a.value" :label="a.label" :value="a.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="search.searchValue"></el-input>
        </el-form-item>
        <!-- <el-form-item label="资产编号">
          <el-input v-model="search.assetNum"></el-input>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="searchFunc">查询</el-button>
          <el-button color="primary" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-card v-show="searchBtnClick">
        <el-table :data="assetsData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="曾经使用人">
                  <span>{{ props.row.sgas_his_owner }}</span>
                </el-form-item>
                <el-form-item label="采购日期">
                  <span>{{ props.row.sgas_purchase_date }}</span>
                </el-form-item>
                <el-form-item label="入库日期">
                  <span>{{ props.row.sgas_entry_date }}</span>
                </el-form-item>
                <el-form-item label="领用日期">
                  <span>{{ props.row.sgas_receive_date }}</span>
                </el-form-item>
                <el-form-item label="参考价格">
                  <span>{{ props.row.bsdt_price }}</span>
                </el-form-item>
                <el-form-item label="供应商">
                  <span>{{ props.row.splr_name }}</span>
                </el-form-item>
                <el-form-item label="使用寿命">
                  <span>{{ props.row.bsdt_lifetime }}</span>
                </el-form-item>
                <el-form-item label="是否拆机">
                  <span>{{ props.row.sgas_is_dismantled }}</span>
                </el-form-item>
                <el-form-item label="拆机来源">
                  <span>{{ props.row.sgas_dismantle_src}}</span>
                </el-form-item>
                <el-form-item label="关键属性1">
                  <span>{{ props.row.bsdt_attr1 }}</span>
                </el-form-item>
                <el-form-item label="关键属性2">
                  <span>{{ props.row.bsdt_attr2 }}</span>
                </el-form-item>
                <el-form-item label="关键属性3">
                  <span>{{ props.row.bsdt_attr3 }}</span>
                </el-form-item>
                <el-form-item label="关联设备1">
                  <span>{{ props.row.sgas_equipment1 }}</span>
                </el-form-item>
                <el-form-item label="关联设备2">
                  <span>{{ props.row.sgas_equipment2 }}</span>
                </el-form-item>
                <el-form-item label="关联设备3">
                  <span>{{ props.row.sgas_equipment3 }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="资产编号" prop="sgas_uid"></el-table-column>
          <el-table-column label="工号" prop="staf_id" width="110px"></el-table-column>
          <el-table-column label="所有者" prop="staf_name"></el-table-column>
          <!-- 状态0采购1库存2使用3返修4报废 -->
          <el-table-column label="状态" >
            <template slot-scope="scope">
              
              <el-tag 
            :type="assetsData[scope.$index].sgas_status == 0 ? '' : assetsData[scope.$index].sgas_status == 1 ? 'success' : assetsData[scope.$index].sgas_status == 2 ? 'info' : assetsData[scope.$index].sgas_status == 3 ? 'warning' : 'danger'">
            {{assetsData[scope.$index].sgas_status == 0 ? '采购' : assetsData[scope.$index].sgas_status == 1 ? '库存' : assetsData[scope.$index].sgas_status == 2 ? '使用中' : assetsData[scope.$index].sgas_status == 3 ? '返修' : '报废'}}
            </el-tag>
            </template>
            
            </el-table-column>
          <el-table-column label="资产类型" prop="bsdt_asts"></el-table-column>
          <el-table-column label="品牌" prop="bsdt_brand" width="60px"></el-table-column>
          <el-table-column label="系列" prop="bsdt_series"></el-table-column>
          <el-table-column label="型号" prop="bsdt_type"></el-table-column>
          <el-table-column label="所在位置" prop="sgas_location"></el-table-column>
        </el-table>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="less">
</style>

<script>
export default {
  name: "kingorld-simplySearch",
  data() {
    return {
      assetsData: [],
      searchOptions: [
        {
          label: "工号",
          value: "staf_id"
        },
        {
          label: "部门",
          value: "staf_dept"
        },
        {
          label: "姓名",
          value: "staf_name"
        },
        {
          label: "所在位置",
          value: "sgas_location"
        },
        {
          label: "资产编号",
          value: "sgas_uid"
        },
        {
          label: "品牌",
          value: "bsdt_brand"
        },
        {
          label: "型号",
          value: "bsdt_type"
        }
      ],
      // optionSelected: "staf_id",
      //searchType 搜索类型
      //searchValue 搜索值
      search: {
        searchType: "staf_id",
        searchValue: ""
      },
      searchBtnClick: false
    };
  },
  watch: {
    search: {
      handler(val) {
        this.$store.commit("updateSearch", val);
      },
      deep: true
    },
    "$store.state.simplySearch.results" () {
      let that = this;
      if(that.$store.state.simplySearch.results){
        that.assetsData = that.$store.state.simplySearch.results;
      }
    }
  },
  methods: {
    optionChanged() {
      let that = this;
      that.search = {
        searchType: "",
        searchValue: ""
      };
    },
    searchFunc() {
      let that = this;
      that.$store.dispatch("searchAjax");
      that.searchBtnClick = true;
    },
    rowClick(row) {
      window.console.log(row);
    },
    reset () {
      
    }
  }
};
</script>