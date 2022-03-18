import logo from './logo.svg';
import './App.css';

export default function AcctInfo() {
  return (
    <>
    <table>
      <tr>
        <td>
          <div style={{margin: '5px', border: '2px solid', width: 'fit-content', height: '450px'}}>
            <h3 style={{marginLeft: '20px', width: '400px'}}>Account Information</h3>
            <table>
              <tr>
                <td width='220px'>
                  <img style={{marginLeft: '10px', border: '3px solid'}} src='logo192.png' width='120px' height='120px'></img>
                </td>
                <td width='260px'>
                  <p style={{textAlign: 'left'}}>Birthday: 01/01/1980</p>
                  <p style={{textAlign: 'left'}}>Email: abc@portlandplayhouse.org</p>
                  <p style={{textAlign: 'left', marginBottom: '0px'}}>Address: 123 Main St</p>
                  <p style={{textAlign: 'left', marginTop: '0px'}}>Portland OR 97000</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{marginLeft: '10px'}}>Name: X Doe</p>
                  <p style={{marginLeft: '10px'}}>Role: General Staff</p>
                  <p style={{marginLeft: '10px'}}>Start date: 01/01/2021</p>
                  <p style={{marginLeft: '10px'}}>Organization info: n/a</p>
                    <table>
                      <tr>
                        <th>
                          <button style={{marginLeft: '10px', width: '75px', height: '40px'}}>Edit</button>
                        </th>
                        <th>
                          <button  style={{marginLeft: '20px', width: '75px', height: '40px'}}>Save</button>
                        </th>
                      </tr>
                    </table>
                </td>
                <td>
                  <p style={{marginTop: '0px'}}>Phone: 503-xxx-xxxx</p>
                  <p>Cell: 503-xxx-xxxx</p>
                  <p>Other phone: 971-xxx-xxxx</p>
                  <p>Pronoun: he/him/his</p>
                  <p>Company: ABC</p>
                  <p>Description: ...</p>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td>
          <p>
            <div style={{margin: '5px', border: '2px solid', width: 'fit-content', height: '165px', overflowY: 'auto'}}>
              <table className='tabler' style={{margin: '5px'}}>
                <tr className='tabler'>
                  <th className='tabler' width='250px'>Associated accounts/contacts</th>
                  <th className='tabler' width='120px'>Relationship</th>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>Account V</td>
                  <td className='tabler'>partner</td>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>Account F</td>
                  <td className='tabler'>same household</td>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>...</td>
                  <td className='tabler'>...</td>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>...</td>
                  <td className='tabler'>...</td>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>...</td>
                  <td className='tabler'>...</td>
                </tr>
                <tr className='tabler'>
                  <td className='tabler'>...</td>
                  <td className='tabler'>...</td>
                </tr>
              </table>
            </div>
          </p>
          <p>
            <div style={{margin: '5px', marginTop: '20px', border: '2px solid', width: 'fit-content', height: '260px' }}>
              <h3 style={{margin: '10px'}}>Related Information</h3>
              <table>
                <tr>
                  <th>
                    <button name='past-donations'>Past donations</button>
                  </th>
                  <th>
                    <button name='volunteer-hours'>Volunteer hours</button>
                  </th>
                  <th>
                    <button name='tasks'>Tasks</button>
                  </th>
                </tr>
              </table>
              <div style={{height: '175px', overflowY: 'auto', borderTop: '2px solid black', borderBottom: '2px solid black'}}>
                <table className='tabler' style={{margin: '5px'}}>
                  <tr className='tabler'>
                    <th className='tabler' width='250px'>related info</th>
                    <th className='tabler' width='120px'>date</th>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                  <tr className='tabler'>
                    <td className='tabler'>...</td>
                    <td className='tabler'>...</td>
                  </tr>
                </table>
              </div>
            </div>
          </p>
        </td>
        <td>
          <div style={{margin: '5px', border: '2px solid', width: 'fit-content', height: '450px'}}>
            <h3 style={{margin: '10px'}}>Filter tasks by:</h3>
            <table style={{margin: '5px'}}>
              <tr>
                <td>From</td>
                <td>
                  <input type='date'></input>
                </td>
                <td>To</td>
                <td>
                  <input type='date'></input>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>Status</td>
                <td>
                  <select name='status' style={{width: '265px'}}>
                    <option value='not-started'>Not Started</option>
                    <option value='in-progress'>In-progress</option>
                    <option value='completed'>Completed</option>
                  </select>
                </td>
              </tr>
            </table>
            <button name='confirm' style={{margin: '5px', marginLeft: '115px', width: '100px', height: '40px' }}>Confirm</button>
            <div style={{height: '275px', overflowY: 'auto', border: '1px solid black', margin: '5px'}}>
              <table className='tabler'  style={{margin: '0px'}}>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task A</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct X</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 2/3/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task S</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct B</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 2/7/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task N</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct X</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 2/20/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task K</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct Y</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 3/2/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task M</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct T</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 2/25/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>Task K</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Assignee: Acct C</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>Due: 2/28/22</p>
                  </td>
                </tr>
                <tr className='tabler'>
                  <td>
                    <h4  style={{width: '140px', margin: '5px'}}>...</h4>
                  </td>
                  <td>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>...</p>
                    <p style={{margin: '0px', marginRight: '5px', textAlign: 'end'}}>...</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
    </>
  );
}
