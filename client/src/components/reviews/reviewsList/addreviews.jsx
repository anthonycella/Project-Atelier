import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../../ProductContext.jsx';
import ReviewQualitiesContext from '../reviewQualities.jsx';

function AddReviewsButton() {
  const [productID] = useContext(ProductContext);
  const [modalStatus, changeModalStatus] = useState(false);

  const modalButton = {
    background: 'green',
    width: '20%',
    borderRadius: '5px',
    justifyContent: 'left',
  };

  if (modalStatus) {
    return (
      <ModalWrapper>
        <FormWrapper>
          <ExitButton toggleStatus={changeModalStatus} />
          <AddReviewForm />
        </FormWrapper>
      </ModalWrapper>
    );
  }
  return (
    <AddReview toggleStatus={changeModalStatus} />
  );
}

function AddReview({ toggleStatus }) {
  return (
    <button type="submit" onClick={() => { toggleStatus(true); }}>Add a Review</button>
  );
}

function ExitButton({ toggleStatus }) {
  return (
    <button type="submit" onClick={() => { toggleStatus(false); }}>X</button>
  );
}

function AddReviewForm(props) {
  const [productID] = useContext(ProductContext);
  const [overallRating, changeOverallRating] = useState(1);
  const [summary, changeSummary] = useState('');
  const [body, changeBody] = useState('');
  const [recommend, changeRecommend] = useState(false);
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [images, addImage] = useState([]);
  const [characteristics, changeCharacteristics] = useState({});

  const formStyle = {
    width: '50%',
    height: 'auto',
  };

  return (
    <>
      <h4>Add a New Review</h4>
      <InputTitle>Overall Rating</InputTitle>
      <OverallRating overallRating={overallRating} changeOverallRating={changeOverallRating} />
      <InputTitle>Do You Recommend this Product?</InputTitle>
      <RecommendReview changeRecommend={changeRecommend} />
      <InputTitle>Characteristics</InputTitle>
      <Characteristics />
      <InputTitle>Review Title</InputTitle>
      <ReviewTitle summary={summary} changeSummary={changeSummary} />
      <InputTitle>Body</InputTitle>
      <Body body={body} changeBody={changeBody} />
      <InputTitle>Upload Your Photos</InputTitle>
      <Images image={images} addImage={addImage} />
      {/* {images ? <ImageDisplay images={images} /> : <> </> } */}
      <InputTitle>What is Your Nickname?</InputTitle>
      <NickName name={name} changeName={changeName} />
      <InputTitle>Your Email</InputTitle>
      <Email email={email} changeEmail={changeEmail} />
      <InputTitle>Submit Your Review</InputTitle>
      <button type="submit">Submit</button>
    </>
  );
}

function Characteristics({ characteristics, changeCharacteristics }) {
  const [reviewQualities, changeReviewQualities] = useContext(ReviewQualitiesContext);
  const charRef = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };
  return (
    <div>
      {reviewQualities ? (
        reviewQualities.map((quality) => {
          return(
            <div>
              <p>{quality}</p>
              <input name={quality} type="radio" value={charRef[quality][0]} onClick={(e) => {} }/>
              <input name={quality} type="radio" value={charRef[quality][1]} onClick={(e) => {} }/>
              <input name={quality} type="radio" value={charRef[quality][2]} onClick={(e) => {} }/>
              <input name={quality} type="radio" value={charRef[quality][3]} onClick={(e) => {} }/>
              <input name={quality} type="radio" value={charRef[quality][4]} onClick={(e) => {} }/>
            </div>
          );
        })
      ) : <>Loading...</>}
    </div>
  );
}

function ImageDisplay({ images }) {
  // console.log(URL.createObjectURL(images[0]));
  return URL.createObjectURL(images);
  // return images.map((image) => {
  //   return <img src={URL.createObjectURL(image)} />
  // });
}

function Images({ image, addImage }) {
  return (
    <input type="file" onChange={(e) => { addImage(...image, e.target.files); }} />
  );
}

function Email({ email, changeEmail }) {
  return (
    <input type="email" value={email} onChange={(e) => { changeEmail(e.target.value); }} />
  );
}

function NickName({ name, changeName }) {
  return (
    <input value={name} onChange={(e) => { changeName(e.target.value); }} />
  );
}

function Body({ body, changeBody }) {
  return (
    <textarea value={body} onChange={(e) => { changeBody(e.target.value); }} />
  );
}

function ReviewTitle({ summary, changeSummary }) {
  return (
    <input value={summary} onChange={(e) => { changeSummary(e.target.value); }} />
  );
}

function OverallRating( {overallRating, changeOverallRating} ) {
  return (
    <input value={overallRating} onChange={(e) => { changeOverallRating(e.target.value); }} />
  );
}

function RecommendReview({ changeRecommend }) {
  const radioButtons = {
    display: 'flex',
  };

  return (
    <div style={radioButtons}>
      <p>Yes</p>
      <input name="recommend" type="radio" value="yes" onClick={() => { changeRecommend(true); }} />
      <p>No</p>
      <input name="recommend" type="radio" value="no" onClick={() => { changeRecommend(false); }} />
    </div>
  );
}

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width 100%;
height: 100vh;
background-color: black;
display: flex;
align-items: center,
justify-content: center;
`;

const InputTitle = styled.h6`
  color: blue;
`;

const FormWrapper = styled.div`
width 70%;
overflow-y: auto;
height: 100%;
background-color: white;
display: flex-box;
opacity: 1.0;
align-items: center,
justify-content: center;
`;

export default AddReviewsButton;
