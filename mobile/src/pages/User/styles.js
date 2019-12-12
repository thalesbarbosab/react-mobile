import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
    padding: 30px;
`    

export const Usuario =  styled.View`
    align-items: center;
    margin: 0 20px 30px;
`

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`

export const Name = styled.Text`
    font-size: 14px;
    color:#333;
    font-weight:bold;
    margin-top:4px;
    text-align:center;
`

export const Bio = styled.Text.attrs({
    numberOfLines: 2
})`
    font-size: 13px;
    line-height: 18px;
    color:#999;
    margin-top: 5px;
    text-align: center;
`