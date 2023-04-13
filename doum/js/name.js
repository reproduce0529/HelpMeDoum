function ShowButton(){
    if(document.querySelector(".namePage_input").value.length > 0){
        document.querySelector(".btn_goToChat").style.display = "block";
        document.querySelector(".btn_goToChat").innerHTML = document.querySelector(".namePage_input").value + "님으로 <br /> 채팅 시작하기"
    }
}

function GoToChatting(){
    if(document.querySelector(".namePage_input").value.length > 0){
        localStorage.setItem("username", document.querySelector(".namePage_input").value)
        location.href = "../chat/"
    }else{
        alert("잘못된 접근입니다. 이름을 입력하세요")
        document.querySelector(".namePage_input").focus();
    }
}
