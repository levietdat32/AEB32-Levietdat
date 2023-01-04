<script>
function handleSubmmit() {
  let valueUserName = document.getElementById("inputUserName")?.value;
  let valuePassword = document.getElementById("inputPassword")?.value;
  if (valueUserName?.toLowerCase() === 'aptech' && valuePassword?.toLowerCase() === 'aptech') {
    alert('Login Success!!!')
    window.location.href = './list.html?isLogin=true'
  }else{
    alert('Login Fail!!!')
  }
}
</script>