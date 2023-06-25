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
			    label="Position"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.position"
              />
			  <CInput
			    label="Date Of Birth"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.dateOfBirth"
              />
			  <CInput
			    label="Nationality"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.nationality"
              />
			  <CInput
			    label="Shirt Number"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.shirtNumber"
              />
			  <CInput
			    label="Role"
                type="text"
				disabled=disabled
				v-model="storeDM.state.formData.role"
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
import { storeDM } from '../../redux/storePlayer'
export default {
  name: 'FormsPlayer',
  data(){
   return{
     storeDM:storeDM
   
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
