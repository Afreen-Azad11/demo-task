// import React, { useEffect ,useState} from 'react'
// import axios from 'axios'
// import { CardSection,Card,Box } from '@mantine/core'
// function CardDemo() {
//     const url="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         axios.get(url).then(response=>{console.log(response.data)
//             setData(response.data)})
//     },[])
//     console.log(data)
//   return (
//     <div>
//         {
//         data.map(item=>(
//       <Card key={item.id}>
//         <Box>
//         <CardSection>{item.success}</CardSection>
//         <CardSection>{item.total_photos}</CardSection>
//         <CardSection>{item.message}</CardSection>
//         <CardSection>{item.offset}</CardSection>
//         <CardSection>{item.limit}</CardSection>
//         </Box>
//       </Card>))}
//     </div>
//   )
// }

// export default CardDemo
