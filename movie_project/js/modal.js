function pushInModal(){

    return movies.forEach(element => {

        modal.push(`<div class="row myModal mx-auto page_row view pt-5" data-id="${element.id}" id="${element.id}">
        
                        <div class="col-md-9 mx-auto bg-secondary p-3 rounded-lg" style= "height: 395px" >
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="closeModal" style= "font-size: 30px">&times;</span>
                            </button>    
                            <div class="row col_row">
                                <div class="col-md-4 img">
                                    <img src="img/${element.image}" alt="">
                                </div>
                                <div class="col info">
                                    <h4 class="header">${element.name}</h5>
                                    <p class="year">წელი: ${element.year}</p>
                                    <p class="director">რეჟისორი: ${element.director}</p>
                                    <p class="country">ქვეყანა: ${element.country}</p>
                                    <p class="desc">${element.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`)                   
    })
}
//? end pushInRow function