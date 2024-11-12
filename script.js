

// 当前时间更新功能
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('timeDisplay').textContent = formattedTime;
}

// 打字机效果的JavaScript代码
const titleText = "欢迎各位参与观看运动晚会！"; // 要打字的内容
const typedTitle = document.getElementById("typed-title"); // 获取标题元素
let index = 0;

function type() {
    if (index < titleText.length) {
        typedTitle.innerHTML += titleText.charAt(index);
        index++;
        setTimeout(type, 220); // 每200毫秒打一个字
    }
}

// 启动打字机效果
type();

// 节目大纲数据
const programData = [
    { title: '朗诵', programName: '《校园趣事》', actors: '阮子轩', time: '17:50 - 18:10', link: './pages/xybl/index.html' },
    { title: '歌曲', programName: '《青花瓷》', actors: '邱雨凡', time: '18:10 - 18:30', link: './pages/video/index.html' },
    { title: '小品', programName: '校园霸凌主题《打劫》', actors: '聂子杰、石诚之、梅媛媛、赵雨星、邱雨凡...', time: '18:30 - 18:50', link: './pages/xybl/《打劫》小品剧本.html' },
    { title: '歌曲', programName: '《XXX》', actors: '陈潇', time: '18:50 - 19:10', link: './4/' },
    { title: '歌曲', programName: '《XXX》', actors: '阮思雨', time: '19:10 - 19:30', link: './5/' },
    { title: '唱跳rap', programName: '《只因你太美》', actors: '阮家伟', time: 'HH:MM - HH:MM', link: './6/' },
    { title: '结束语', programName: '主持人总结', actors: '主持人', time: '19:60 - 19:40', link: './7/' }
];

// 生成节目列表
const programList = document.getElementById('program-list');
const programTableBody = document.getElementById('program-table');
let programIndex = 0;

function renderPrograms() {
    programData.forEach(item => {
        programIndex++;

        // 添加到列表
        const listItem = document.createElement('li');
        listItem.textContent = `${programIndex}. ${item.title} - ${item.programName}`;
        programList.appendChild(listItem);

        // 添加到表格
        const row = document.createElement('tr');
        const programCell = {
            programIndexCell: document.createElement('td'),
            programNameCell: document.createElement('td'),
            actorsCell: document.createElement('td'),
            timeCell: document.createElement('td'),
            linkCell: document.createElement('td')
        }

        programCell.programIndexCell.textContent = programIndex;
        programCell.programNameCell.textContent = `${item.title} - ${item.programName}`;
        programCell.actorsCell.textContent = item.actors;
        programCell.timeCell.textContent = item.time;
        programCell.linkCell.innerHTML = `<a href="${item.link}">观看</a>`;
        
        row.appendChild(programCell.programIndexCell);
        row.appendChild(programCell.programNameCell);
        row.appendChild(programCell.actorsCell);
        row.appendChild(programCell.timeCell);
        row.appendChild(programCell.linkCell);
        programTableBody.appendChild(row);
    });
}

// 初始化渲染节目
renderPrograms();

// // 添加节目的功能
// document.getElementById('add-button').addEventListener('click', () => {
//     const title = prompt("请输入节目名称:");
//     const program = prompt("请输入节目内容:");
//     const actors = prompt("请输入演员:");
//     const time = prompt("请输入时间:");
//     const purl = prompt("请输入链接:");

//     if (title && program && actors && time && purl) {
//         // 添加新节目到数据数组
//         programData.push({ title, program, actors, time, purl });

//         // 重新渲染节目
//         renderPrograms();
//     } else {
//         alert("请确保所有信息都已填写!");
//     }
// });

setInterval(updateTime, 1000); // 每秒更新一次时间
updateTime(); // 页面加载时也要初始化一次时间