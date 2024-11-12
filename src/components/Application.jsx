import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100; // Convert cm to meters
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
    if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <>
    <div >
        <div style={{ textAlign: 'center',width:"400px", height:"600px", border:"solid", marginLeft:"35%", borderRadius:"15px", backgroundColor:"white" }}>
          <h1 style={{textDecoration:"underline"}}>BMI Calculator</h1>
          <div>
             <h2> Weight (kg):</h2>
              <Form.Control style={{width:"300px", height:"50px", borderRadius:"20px"}} className='p-5' size="lg" type="text" placeholder="eg-80kg"
               value={weight}
               onChange={(e) => setWeight(e.target.value)} />
            
          </div>
          <div style={{ marginTop: '10px' }}>
            
             <h2> Height (cm):</h2>

             <Form.Control style={{width:"300px", height:"50px", borderRadius:"20px"}} className='p-5' size="lg" type="text" placeholder="eg-180cm"
               value={height}
               onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div style={{marginTop:"10px"}} >
            <Button style={{backgroundColor:"#66ff33", width:"120px", height:"60px", borderRadius:"20px"}} onClick={calculateBMI} variant="success">Calculate</Button>
        </div>
          {bmi && (
            <div style={{ marginTop:"30px" }}>
              <h3>Your BMI: {bmi}</h3>
              <h4>Category: {category}</h4>
            </div>
          )}
        </div>
    </div>
    </>
  );
}

export default BMICalculator;
