<template>
<CModal
      :title="storeDM.state.titleModal"
      color="primary"
      :show.sync="storeDM.state.warningModal"
    >
	<FormsPlayer />
   	  <template #footer>
                <CButton @click="storeDM.commit('changeWarningModal',{modalState:false})" color="secondary"><CIcon name="cil-x-circle"/> Cancel</CButton>
      </template>	
			
    </CModal>
</template>
<script>
	import { storeDM } from '@/views/../redux/storePlayer'
	import FormsPlayer from '@/views/players/FormsPlayer'
	export default {
	  name: 'ModalPlayer',
	  components: {FormsPlayer},
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