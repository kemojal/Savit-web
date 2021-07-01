import React from 'react'
import styled from 'styled-components';

const Dialogue = styled.div`
    background-color: rgba(55, 55, 55, 0.5);
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner{
        width: 40vw;
        height: 90vh;
        background-color: white;
        box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    .recurring{
        padding: 50px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 36px;
        color: rgba(0,0,0,0.2);
        border-top:  1px solid rgba(0,0,0,0.1);
    }
    select{
        font-size: 36px;
        font-weight: bold;
    }
    .cateogry{
        
    }

`
const DialogueHeader = styled.div`
    /* border-bottom:  1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--red);
    padding: 50px 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 22px;
    color: rgba(0, 0, 0,0.5);
`
const MainDialog = styled.div`
    width:  100%;
    height: 80%;
    padding: 20px 20px;
    /* overflow-y: scroll; */
    margin-top: -20%;
`
const AmountInput  = styled.input`
        border: 1px solid #DDE2E8; 
        border: 1px solid #DDE2E8; 
        width: 100%;
        padding: 20px 30px;
        border-radius: 28px;
        font-size: 125px;
        margin: 10px  0;
        display: flex;
        justify-content: center;
        align-items: center;
        &::placeholder {
            color: #C4CED9;
            font-size: 125px;
    }
`
const Input  = styled.input`
    border: 1px solid #DDE2E8;
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;
        font-size: 25px;
        margin: 50px  0;
        &::placeholder {
            color: #C4CED9;
            font-size: 25px;
    }
`
const AddTransactionDialogue = () => {
    return (
        <Dialogue>
            <div className="inner">
                <DialogueHeader>Add Transaction</DialogueHeader>
                <MainDialog>
                    <AmountInput
                    placeholder="$150"
                    />
                    <Input
                    placeholder="Title"
                    />
                    <div className="recurring">
                        <span className="cateogry">Category</span>
                        <select name='sorts' id='sorts'>
                            <option value='volvo'>Clothing</option>
                            <option value='saab'>Food</option>
                            <option value='saab'>Rent</option>
                            <option value='saab'>Coffee</option>
                        </select>
                    </div>
                    <div className="recurring">
                        <span className="cateogry">Recurring</span>
                        <select name='sorts' id='sorts'>
                            <option value='volvo'>Weekly</option>
                            <option value='saab'>Monthly</option>
                            <option value='saab'>Yearly</option>
                        </select>
                    </div>
                </MainDialog>
            </div>
        </Dialogue>
    )
}

export default AddTransactionDialogue
