console.log('running')
//document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO');
    if(document.querySelector('.sidebar').classList.contains('sidebarGO')){
        document.querySelector('.ham').style.diplay = 'inline'
        document.querySelector('.cross').style.diplay = 'none'
    }
    else{
        document.querySelector('.ham').style.diplay = 'none'
        setTimeout(() =>{
            document.querySelector('.cross').style.diplay = 'inline'
        },300);
    }
})
