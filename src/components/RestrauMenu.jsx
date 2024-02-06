import { useParams } from "react-router-dom";

const RestrauMenu = () => {
    const {resID} = useParams()
    console.log(resID)

  return (
    <div>
        <h1>Restaurent id: {resID}</h1>
        <h3>KFC</h3>
    </div>
  )
}

export default RestrauMenu