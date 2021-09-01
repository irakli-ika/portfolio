// todo => main filter
function liveSearch(){
    return document.getElementById('input').addEventListener('keyup', (e) => {
        const input = e.target.value
        const filteredCols = []

        function filteredMovies() {
            return movies.filter((item) => {
                if(item.name.includes(input)) {

                    filteredCols.push(`<div class="main_col col-md-3 bg-secondary m-2 pt-2 rounded-lg">
                                            <div class="content text-center">
                                                <a href="#${item.name}" class="text-decoration-none open_modal" id="${item.id}" data-id="${item.id}">
                                                    <div class="movie_name">
                                                        <h5 class="item">${item.name}</h5>
                                                    </div>
                                                    <div class="movie_img">
                                                        <img src="img/${item.image}" alt="">
                                                    </div>
                                                    <div class="more text-right">
                                                        <p>სრულად</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>`)
                }
            })
        }

        filteredMovies()

        const filterPromise = []
        if (input.trim() === '' ) {
            
            movies.slice(0, 3).forEach((e) => {
                filterPromise.push(`<div class="main_col col-md-3 bg-secondary m-2 pt-2 rounded-lg">
                                    <div class="content text-center">
                                        <a href="#${e.name}" class="text-decoration-none open_modal" id="${e.id}" data-id="${e.id}">
                                            <div class="movie_name">
                                                <h5 class="item">${e.name}</h5>
                                            </div>
                                            <div class="movie_img">
                                                <img src="img/${e.image}" alt="">
                                            </div>
                                            <div class="more text-right">
                                                <p>სრულად</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>`)})

            document.getElementById('main_row').innerHTML = filterPromise.map((e) => e).join('')
        }
        else document.getElementById('main_row').innerHTML = filteredCols.map(element => element).join('')
    })
}
//? end filter function