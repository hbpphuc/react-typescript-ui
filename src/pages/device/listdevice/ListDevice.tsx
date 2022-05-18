import { PlusSquareFilled } from '@ant-design/icons'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'
import './ListDevice.css'

export default function ListDevice() {
  return (
    <div className="listdevice">
      <p className="listdevice-title">Danh sách thiết bị</p>
      <div className="listdevice-filter">
        <div className="filter-status-group">
          <div className="filter-status">
            <p className="filter-status-title">Trạng thái hoạt động</p>
            <select name="" id="" className="filter-status-select">
              <option value="all">Tất cả</option>
              <option value="active">Hoạt động</option>
              <option value="all">Ngưng hoạt động</option>
            </select>
          </div>
          <div className="filter-status">
            <p className="filter-status-title">Trạng thái kết nối</p>
            <select name="" id="" className="filter-status-select">
              <option value="all">Tất cả</option>
              <option value="active">Kết nối</option>
              <option value="all">Mất kết nối</option>
            </select>
          </div>
        </div>
        <div className="filter-key">
          <p className="filter-status-title">Từ khóa</p>
          <input type="text" className="search-bar" placeholder='Nhập từ khóa'/>
        </div>
      </div>
      <div className="listdevice-table">
        <table className='table-list'>
          <thead>
            <tr>
              <th style={{width: 103}}>Mã thiết bị</th>
              <th style={{width: 99}}>Tên thiết bị</th>
              <th style={{width: 138}}>Địa chỉ IP</th>
              <th style={{width: 171}}>Trạng thái hoạt động</th>
              <th style={{width: 145}}>Trạng thái kết nối</th>
              <th style={{width: 268}}>Dịch vụ sử dụng</th>
              <th style={{width: 82}}></th>
              <th style={{width: 106}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="td-1">KIO_01</td>
              <td id="td-2">Kiosk</td>
              <td id="td-3">192.168.1.10</td>
              <td id="td-4"><span className='td-dot' id='tddotbg-1'></span>Hoạt động</td>
              <td id="td-5"><span className='td-dot' id='tddotbg-2'></span>Mất kết nối</td>
              <td id="td-6">Khám tim mạch, khám mắ...<a href="#" className='table-link'>Xem thêm</a></td>
              <td id="td-7"><a href="#" className='table-link'>Chi tiết</a></td>
              <td id="td-7"><a href="#" className='table-link'>Cập nhật</a></td>
            </tr>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td id="td-4"><span className='td-dot' id='tddotbg-2'></span>Ngưng hoạt động</td>
              <td id="td-5"><span className='td-dot' id='tddotbg-1'></span>Kết nối</td>
              <td>Khám tim mạch, khám mắ...<a href="#" className='table-link'>Xem thêm</a></td>
              <td><a href="#" className='table-link'>Chi tiết</a></td>
              <td><a href="#" className='table-link'>Cập nhật</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="device-addpage">
        <PlusSquareFilled className='addpage-icon'/>
        <Link to='' className='addpage-link'>Thêm thiết bị</Link>
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}
