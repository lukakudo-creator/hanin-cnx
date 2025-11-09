const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalBg = document.getElementById('modalBg');
const searchBtn = document.getElementById('searchBtn');
const resultBox = document.getElementById('result');

if(openModal){ openModal.onclick = () => modalBg.style.display = 'flex'; }
if(closeModal){ closeModal.onclick = () => modalBg.style.display = 'none'; }
window.onclick = e => { if(e.target == modalBg) modalBg.style.display = 'none'; };

const data = {
  '00123': { name:'민 민트라', doc:'관광비자 신청', status:'완료 (Complete)' },
  '00124': { name:'박 지은', doc:'서류 인증', status:'진행 중 (In Progress)' },
  '00999': { name:'김 성민', doc:'추가 서류 제출', status:'대기 중 (Pending)' }
};

if(searchBtn){
  searchBtn.onclick = () => {
    const id = document.getElementById('mid').value.trim();
    if(data[id]){
      const d = data[id];
      resultBox.innerHTML = `<strong>신청인:</strong> ${d.name}<br><strong>서류명:</strong> ${d.doc}<br><strong>상태:</strong> ${d.status}`;
      resultBox.style.display = 'block';
    } else {
      resultBox.innerHTML = '⚠️ 해당 번호의 정보를 찾을 수 없습니다.';
      resultBox.style.display = 'block';
    }
  };
}
