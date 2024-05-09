var urlParams = new URLSearchParams(window.location.search);

document.querySelector("#name").textContent = "Your name is:" + urlParams.get("name");
let psw = document.querySelector("#psw");
psw.textContent = "Your password is:" + urlParams.get("psw");
psw.style.color = "red";

const formData = new FormData();
for (const pair of urlParams.entries()) {
  formData.append(pair[0], pair[1]);
}

// 獲取上傳的圖片文件
const uploadedFile = formData.get('pt');

// 創建一個FileReader對象來讀取文件內容
const reader = new FileReader();

// 當文件讀取完成時，將其內容設置為圖片元素的src屬性值
reader.onload = function(e) {
  const uploadedImage = document.getElementById('pt');
  uploadedImage.src = e.target.result;
};

// 將圖片文件讀取為DataURL
reader.readAsDataURL(uploadedFile);
