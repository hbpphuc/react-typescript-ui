import { CaretRightFilled, PlusSquareFilled } from '@ant-design/icons'
import { DatePicker, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './ListService.css'

export default function ListDevice() {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  return (
    <div className="listservice">
      <p className="listservice-title">Danh sách dịch vụ</p>
      <div className="listservice-filter">
        <div className="filter-status-group">
          <div className="filter-status">
            <p className="filter-status-title">Trạng thái hoạt động</p>
            <select name="" id="" className="filter-status-select">
              <option value="all">Tất cả</option>
              <option value="active">Hoạt động</option>
              <option value="all">Ngưng hoạt động</option>
            </select>
          </div>
          <div className="filter-date">
            <p className="filter-status-title">Chọn thời gian</p>
            <div className="filter-datepicker">
            <DatePicker defaultValue={moment('10/10/2021', dateFormatList[0])} format={dateFormatList} className = "service-datepicker"/>
            <span>
              <CaretRightFilled className="filled-arrowleft"/>
            </span>
            <DatePicker defaultValue={moment('18/10/2021', dateFormatList[0])} format={dateFormatList} className = "service-datepicker"/>
            </div>
          </div>
        </div>
        <div className="filter-key">
          <p className="filter-status-title">Từ khóa</p>
          <input type="text" className="search-bar" placeholder='Nhập từ khóa'/>
        </div>
      </div>
      <div className="listservice-table">
        <table className='table-list'>
          <thead>
            <tr>
              <th style={{width: 150}}>Mã dịch vụ</th>
              <th style={{width: 224}}>Tên dịch vụ</th>
              <th style={{width: 230}}>Mô tả</th>
              <th style={{width: 253}}>Trạng thái hoạt động</th>
              <th style={{width: 125}}></th>
              <th style={{width: 125}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="td-1">KIO_01</td>
              <td id="td-2">Kiosk</td>
              <td id="td-3">Mô tả dịch vụ</td>
              <td id="td-4"><span className='td-dot' id='tddotbg-1'></span>Hoạt động</td>
              <td id="td-7"><a href="#" className='table-link'>Chi tiết</a></td>
              <td id="td-7"><a href="#" className='table-link'>Cập nhật</a></td>
            </tr>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>Mô tả dịch vụ</td>
              <td id="td-4"><span className='td-dot' id='tddotbg-2'></span>Ngưng hoạt động</td>
              <td><a href="#" className='table-link'>Chi tiết</a></td>
              <td><a href="#" className='table-link'>Cập nhật</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="service-addpage">
        <PlusSquareFilled className='addpage-icon'/>
        <Link to='' className='addpage-link'>Thêm dịch vụ</Link>
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}
