

// 当前时间更新功能
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('timeDisplay').textContent = formattedTime;
}

// 节目大纲数据
const programData = [
    { title: '朗诵', programName: '《XXX》', actors: '阮子轩', time: '17:50 - 18:10', link: './1/青花瓷.mp3' },
    { title: '歌唱', programName: '《我和我的祖国》', actors: '歌唱者A', time: '18:10 - 18:30', link: './2/' },
    { title: '小品', programName: '《校园霸凌》', actors: '聂子杰', time: '18:30 - 18:50', link: './3/' },
    { title: '舞蹈', programName: '《青春舞曲》', actors: '舞蹈团体D', time: '18:50 - 19:10', link: './4/' },
    { title: '诗朗诵', programName: '《新年寄语》', actors: '朗读者E', time: '19:10 - 19:30', link: './5/' },
    { title: '结束语', programName: '主持人总结', actors: '主持人', time: '19:30 - 19:40', link: './6/' }
];

// 动态生成节目大纲列表
const programList = document.getElementById('program-list');
const programTableBody = document.getElementById('program-table');
let programIndex = 0;

function renderPrograms() {
    programData.forEach(item => {
        // 添加到列表
        const listItem = document.createElement('li');
        programIndex++;
        listItem.textContent = `${programIndex}. ${item.title} - ${item.programName}`;
        programList.appendChild(listItem);

        // 添加到表格
        const row = document.createElement('tr');
        const programCell = {
            programNameCell: document.createElement('td'),
            actorsCell: document.createElement('td'),
            timeCell: document.createElement('td'),
            linkCell: document.createElement('td')
        }

        programCell.programNameCell.textContent = `${item.title} - ${item.programName}`;
        programCell.actorsCell.textContent = item.actors;
        programCell.timeCell.textContent = item.time;
        programCell.linkCell.innerHTML = `<a href="${item.link}">观看</a>`;

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