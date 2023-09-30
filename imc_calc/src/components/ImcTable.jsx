
import Button from './Button';
import "./ImcTable.css";


const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="result-container">
        <p id="imc-number">
            Your BMI: <span className={infoClass}>{imc}</span>
        </p>
        <p id="imc-info">
            Current Status: <span className={infoClass}>{info}</span>
        </p>
        <h3>Discover BMI Categories:</h3>
        <div id="imc-table">
            <div className="table-header">
                <h4>BMI</h4>
                <h4>Categories</h4>
                <h4>Obesity</h4>
            </div>
            {data.map ((item) => (
                <div className="table-data" key={item.info}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
            ))}
        </div>
        <Button id="back-btn" text="Go Back" action={resetCalc}/>
    </div>
  )
}

export default ImcTable