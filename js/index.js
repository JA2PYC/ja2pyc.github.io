addEventListener('DOMContentLoaded', () => {
    const main_front = document.getElementsByClassName('main_front');
    console.log(main_front)
    if (main_front) {
        function initialize() {
            callFrontInitializer(main_front)
            eventHandler();
        }

        function eventHandler() {
            addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('main_front')) {
                    callFrontStarter(target, event);
                }

            });
        }

        function callFrontInitializer(main_front) {
            let main_frontArr = Array.from(main_front);

            main_frontArr.forEach((array) => {
                // Set Hexagon
                let front_hexagon = array.getElementsByClassName('front_hexagon')

                    // Set Grid Counter
                    let front_grid = main_frontArr[0].getElementsByClassName('front_grid');

                if (front_grid) {
                    Array.from(front_grid).forEach((array) => {

                    });

                    return;
                    console.log(front_grid[0].offsetWidth)

                    // front_grid의 width 측정
                    const frontGridWidth = front_grid[0].offsetWidth;
                    console.log(`Front grid width: ${frontGridWidth}px`);

                    // 필요한 grid_article의 개수를 계산 (예: 100px 크기의 grid_article로 채운다고 가정)
                    const articleWidth = 100;
                    const articleCount = Math.floor(frontGridWidth / articleWidth);
                    console.log(`Number of articles to add: ${articleCount}`);

                    // grid_article 요소 추가
                    for (let i = 0; i < articleCount; i++) {
                        const article = document.createElement('div');
                        article.className = 'grid_article';
                        article.textContent = `Article ${i + 1}`;
                        article.style.width = `${articleWidth}px`; // 크기 설정
                        article.style.border = '1px solid black'; // 예시로 테두리 추가
                        article.style.display = 'inline-block'; // 가로로 나열되도록 설정
                        front_grid[0].appendChild(article);
                    }
                }
                return;
                console.log('getElement')
                console.log(main_front)
                console.log(main_frontArr)
                console.log(front_grid)

                console.log('QuerySelector');
                let main_frontQuery = document.querySelector('.main_front');
                let front_gridQuery = main_frontQuery.querySelector('.front_grid')
                console.log(main_frontQuery)
                console.log(front_gridQuery)
                console.log(main_front)
            })
        }

        function callFrontStarter() {

        }

        initialize();
    }
});