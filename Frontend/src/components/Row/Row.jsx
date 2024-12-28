import React from 'react'

const Row = ({head,desc}) => {
  return (
    
      <tr>
            <th
              style={{
                textAlign: 'left',
                padding: '10px',
                backgroundColor: 'black',
                border: '1px solid #ddd',
                borderRadius : '2px 2px 0px 0px'
              }}
            >
              {head}
            </th>
            <td
              style={{
                padding: '10px',
                border: '1px solid #ddd',
              }}
            >
              {desc}
            </td>
          </tr>
    
  )
}

export default Row
