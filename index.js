        
        
        
        function time(){
          const arr=['red','green','blue','orange','voilet','pink','yellow']
          let color=arr[Math.floor(Math.random()*7)]
          
          
            // const hex='0123456789ABCDEF'
            // let color='#'
            // for (let i = 0; i <6; i++) {
            //   color+=hex[Math.floor(Math.random()*16)]
              
            // }
            // document.getElementById('start').style.color=color
            document.getElementById('mn').style.borderColor=color
            
            const date=new Date
            const mn=document.getElementById('hd').innerHTML=date.toLocaleTimeString()
        }
        setInterval(time,100.9)

        // function sun(){
        //     const arr=math.random()
        //     console.log(arr)
        // }
        // setInterval(sun,2000)
        const show=document.getElementById('show')
        const hidde=document.getElementById('hidde')
        
        function add(){
            document.getElementById('mn').style.display='none'
        }    

        function remove() {
          document.getElementById('mn').style.display = 'flex';
         
          
        }
        
        show.addEventListener('click', add);
        hidde.addEventListener('click', remove);
            
        
 
         
        