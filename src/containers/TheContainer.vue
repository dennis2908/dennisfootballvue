<template>
  <div class="c-app"  v-if="dataLogin">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
  <div v-else>
   <Signin/>
  </div>
</template>


<script>
import Signin from '@/views/pages/Signin'
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
export default {
  name: 'TheContainer',
  data(){
    return{
	  dataLogin : ""
	}  
  },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
	Signin
  },
   mounted(){
	this.dataLogin = localStorage.getItem("DataVue")
	console.log(this.dataLogin)
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>