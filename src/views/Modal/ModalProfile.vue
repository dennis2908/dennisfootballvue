<template>
<CModal
      :title="storeDM.state.titleModal"
      color="primary"
      :show.sync="storeDM.state.warningModal"
    >
	<FormsProfile />
   	  <template #footer>
                <CButton @click="storeDM.commit('changeWarningModal',{modalState:false})" color="secondary"><CIcon name="cil-x-circle"/> Cancel</CButton>
      </template>	
			
    </CModal>
</template>
<script>
	import { storeDM } from '@/views/../redux/store'
	import FormsProfile from '@/views/teams/FormsProfile'
	export default {
	  name: 'ModalProfile',
	  components: {FormsProfile},
	  data(){
	   return {
		  storeDM:storeDM
	      
	   }
	  },
	  methods: {
	    submit(){
		  
		
		} 
	  }
	  
	}
</script>