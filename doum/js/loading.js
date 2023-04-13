window.onload = function () {
  plusLoadingDot();
};

let kk;

let LoadingTextArray = [
  "Tip. 도움씨는 사실 부끄럼이 많아요",
  "Tip. 도움씨는 개발자의 정신건강을 위해서 만들어졌어요!",
  "Tip. 개발자 계좌번호는 농협 3521850005913입니다.",
  "Tip. 하 집에가고싶다. ",
];

function plusLoadingDot() {

    
    const rand_0_9 = Math.floor(Math.random() * 4);
    document.getElementById("loadingTip").innerHTML = LoadingTextArray[rand_0_9]
  let i = 0;

  kk = setInterval(() => {
    i++;
    document.getElementById("loadingMessage").innerHTML =
      document.getElementById("loadingMessage").innerHTML + ". ";

    if (i == 3) {
      clearInterval(kk);
      location.href = "../name/";
    }
  }, 1200);
}
