<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          List Area
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
			:loading="loading"
            :items="items"
            :fields="fields"
            :items-per-page="5"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #index="{item, index}">
              <td>
                <CBadge color="info">
                      {{index+1}}
                   </CBadge>
              </td>
            </template>
			<template #button_td="{item}">
              <td><div v-if="item">
			    <CButton type="submit" @click="getFootballUrl(item)" size="sm" class="mr-2" color="success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg> See Football Club</CButton>
					  </div>
              </td>
            </template>
			<template #id="{item}">
              <td><div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.id)}}</CBadge>
				  </div>
			  </td>	  
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {areasData,fields} from './AreasData'
import {primaryBadge,hasWhiteSpace} from '../../genFunctions/genFunctions'
import { storeDM } from '../../redux/store'
import { mapState } from 'vuex'
export default {
  name: 'Areas',
  data () {
    return {
	  warningModal: false,
	  primaryBadge:primaryBadge,
      items: areasData,
	  loading : true,
      fields: fields,
      activePage: 1,
	  hasWhiteSpace:hasWhiteSpace,
	  //store:store,
	  storeDM:storeDM,
	  formData : {
	   username:"",
	   name:"",
	   password:"",
	 },
	 formDataMessage : {
	   username:"",
	   name:"",
	   password:"",
	 }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    },
	items: function() {
      console.log( this.items) 
    }
  },	
  mounted(){
	this.items = [];
    this.MyfetchData(1);
  },
  methods: {
    MyfetchData(page) {
	if(this.items.length==0){
		fetch("https://api.football-data.org/v2/areas/",{
		method: "GET",
		headers: {
		"X-Auth-Token": "f921ed3bb9484a35bcade5b390269749", 
		},
		dataType: "json",
		mode: "cors",
		})
		  .then(res => res.json())
		  .then(
			(result) => {
			  console.log(result.areas)
			  this.items = result.areas;
			  this.loading = false
		  });	
		
	 }
	 else{
		this.loading = false
	 }
	},
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      this.$router.push('/teams/list?id='+item.id)
    },
    pageChange (val) {
	  this.loading = true
      this.$router.push({ query: { page: val }})
	  //this.items = [];
	  this.MyfetchData(val);
    },
	getFootballUrl(item){
	  this.$router.push('/teams/list?id='+item.id)
	
	},
  },
}
</script>
