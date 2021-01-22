"use strict";
function login () {
    let id = prompt("사용자의 정보를 입력해주세요.");
    let message = "";
    if (id === "Admin") {
        let password = prompt("비밀번호를 입력해주세요.");
        if (password === "TheMaster") {
            message = "환영합니다!";
        } else if (password === null || password === '') {
            console.log("취소");
            message = "취소되었습니다.";
        } else {
            message = "인증에 실패하였습니다.";
        }
    } else {
        message = "관리자 계정이 아닙니다.";
    }
    alert(message);
}
