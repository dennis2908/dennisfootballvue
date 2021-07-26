<template>
  <CRow style="width:1000px;overflow-x: scroll;">
    <CCol>
      <CCard style="width:2200px;">
        <CCardHeader>
          Football Club <CButton
      @click="goBack()"
      color="info"
	  class="m-3"
	  size="sm"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> Go Back
    </CButton><CSpinner class="ml-3 align-items-center" color="success" size="sm" :style="display"/>
        </CCardHeader>
    <ModalProfile @open="submit()" ></ModalProfile>
        <CCardBody>
          <CDataTable
            hover
            striped
			:loading="loading"
            :items="items"
            :fields="fields"
            :items-per-page="5"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'left'}"
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
			    <CButton type="submit" @click="getProfile(item)" size="sm" class="mr-2" color="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg> Profile</CButton><CButton type="submit" @click="getPlayersUrl(item)" size="sm" class="mr-2" color="success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg> See Player Lists</CButton>
					  </div>
              </td>
            </template>
			<template #index="{item, index}">
              <td><div v-if="item">
                <CBadge color="info">
                      {{index+1}}
                   </CBadge>
				   </div>
              </td>
            </template>
			<template #id="{item}">
              <td><div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.id)}}</CBadge>
				  </div>
			  </td>	  
            </template>
			<template #email="{item}">
              <td><div v-if="item">
				  {{checkData(item.email)}}
				  </div>
			  </td>	  
            </template>
			<template #name="{item}">
              <td><div v-if="item">
				   {{checkData(item.name)}}
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
import {teamsData,fields} from './TeamsData'
import ModalProfile from '@/views/Modal/ModalProfile'
import {primaryBadge,hasWhiteSpace,checkData} from '../../genFunctions/genFunctions'
import { storeDM } from '../../redux/store'
import { mapState } from 'vuex'
export default {
  name: 'Teams',
  components: {ModalProfile},
  data () {
    return {
	  warningModal: false,
	  primaryBadge:primaryBadge,
	  checkData:checkData,
      items: teamsData,
	  loading : true,
	  display : "visibility:true",
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
	this.loading = true
	if(this.items.length==0){
		fetch("https://api.football-data.org/v2/teams?areas="+this.$route.query.id,{
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
			  this.items = result.teams;
			  this.loading = false
			  this.display = "visibility:hidden"
		  });	
		
	 }
	 else{
		this.loading = false
		this.display = "visibility:hidden"
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
      this.$router.push({path: `/userdata/list/${index + 1}`})
    },
    pageChange (val) {
	  this.loading = true
      this.$router.push({ query: { page: val,id: this.$route.query.id }})
	  //this.items = [];
	  this.MyfetchData(val);
    },
	goBack(){
	  this.$router.push('/areas/list')
	
	},
	getProfile(item){
	   storeDM.commit('changeWarningModal',{modalState:true})
	   storeDM.commit('changeFormData',{getData:item})
	   storeDM.commit('changeTitleModal',{title:"Club Profile"})
	
	},
	getPlayersUrl(item){
	  this.$router.push('/players/list?id='+item.id+"&team_id="+this.$route.query.id)
	
	},
  },
}
</script>
