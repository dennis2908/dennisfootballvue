<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CForm novalidate>
            <CCardBody>
			  <CInput
			    label="Name"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.name"
              />
              <CInput
			    label="Address"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.address"
              />
			  <CInput
			    label="Phone"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.phone"
              />
			  <CInput
			    label="Website"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.website"
              />
			  <CInput
			    label="Email"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.email"
              />
			  <CInput
			    label="Founded"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.founded"
              />
			  <CInput
			    label="Club Color"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.clubColors"
              />
			  <CInput
			    label="Venue"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.venue"
              />
            </CCardBody>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import {hasWhiteSpace} from '@/views/../genFunctions/genFunctions'
import { storeDM } from '../../redux/store'
export default {
  name: 'FormsUserCreate',
  data(){
   return{
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
  watch : {
    value(value) {
	   console.log(value)
        // or generate/simulate a native events (not sure how, but its outside Vue's realm I think
    }
  },
  methods:{
  }
}
</script>
