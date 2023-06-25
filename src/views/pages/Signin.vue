<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="5">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm ref="form" @submit="submit($event)">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
					v-model="formData.username"
					required="required"
					valid-feedback="Great!!"
					:invalid-feedback="formDataMessage.username"
					:is-valid="validatorUsername"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
					v-model="formData.password"
                    type="password"
                    autocomplete="curent-password"
					required="required"
					valid-feedback="Great!!"
					:invalid-feedback="formDataMessage.password"
					:is-valid="validatorPassword"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" type="submit" class="px-4">Login</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>

          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import {hasWhiteSpace} from '@/views/../genFunctions/genFunctions'
export default {
  name: 'Signin',
  data(){
   return{
     formData : {
	   username:"",
	   password:"",
	 },
	 formDataMessage : {
	   username:"",
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
   submit(event){
   console.log(this.formData.username)
     if(!this.formDataMessage.password && !this.formDataMessage.password && this.formData.username==="console" && this.formData.password==="myconsole"){
	     localStorage.setItem('DataVue', window.btoa(window.btoa(window.btoa(window.btoa( this.formData.username )))));
		 location.reload()
	 }
	 else{
		   this.formData.username=""
		   this.formData.password=""
		 }
   },
   validatorUsername (val) {
	   this.formDataMessage.username = "";
		 if(val.length < 4)
		   this.formDataMessage.username = "Please provide at least 4 characters."
		   
		 if(hasWhiteSpace(val))
		   this.formDataMessage.username += " Please remove white spaces"  
		 
         if(this.formDataMessage.username)		 
			return false;
		 else
		    return val;
	},
	validatorPassword (val) {
	   this.formDataMessage.password = "";
		 if(val.length < 4)
		   this.formDataMessage.password = "Please provide at least 4 characters."
		   
		 if(hasWhiteSpace(val))
		   this.formDataMessage.password += " Please remove white spaces"  
		 
         if(this.formDataMessage.password)		 
			return false;
		 else
		    return val;
	}
  }
}
</script>
