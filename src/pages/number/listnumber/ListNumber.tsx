import { CaretRightFilled, PlusSquareFilled } from '@ant-design/icons'
import { DatePicker, Pagination } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './ListNumber.css'

export default function ListNumber() {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return (
        <div className="listnumber">
            <div className="listnumber-filter">
                <div className="filter-group">
                    <div className="filter-items">
                        <p className="filter-title">
                            Tên dịch vụ
                        </p>
                        <select name="" id="" className="filter-select">
                            <option value="all">Tất cả</option>
                            <option value="1">Khám sản phụ khoa</option>
                            <option value="2">Khám tai mũi họng</option>
                            <option value="3">Khám răng hàm mặt</option>
                            <option value="4">Khám tổng quát</option>
                            <option value="5">Khám tim mạch</option>
                        </select>
                    </div>
                    <div className="filter-items">
                        <p className="filter-title">
                            Tình trạng
                        </p>
                        <select name="" id="" className="filter-select">
                            <option value="all" selected>Tất cả</option>
                            <option value="waiting">Đang chờ</option>
                            <option value="used">Đã sử dụng</option>
                            <option value="skip">Bỏ qua</option>
                        </select>
                    </div>
                    <div className="filter-items">
                        <p className="filter-title">
                            Nguồn cấp
                        </p>
                        <select name="" id="" className="filter-select">
                            <option value="all">Tất cả</option>
                            <option value="kiosk">Kiosk</option>
                            <option value="system">Hệ thống</option>
                        </select>
                    </div>
                    <div className="filter-items-date">
                        <p className="filter-title">Chọn thời gian</p>
                        <div className="filter-datepicker">
                            <DatePicker
                                defaultValue={moment(
                                    '10/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="number-datepicker"
                            />
                            <span>
                                <CaretRightFilled className="filled-arrowleft" />
                            </span>
                            <DatePicker
                                defaultValue={moment(
                                    '18/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="number-datepicker"
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-key">
                    <p className="filter-status-title">Từ khóa</p>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Nhập từ khóa"
                    />
                </div>
            </div>
            <div className="listnumber-table">
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khách hàng</th>
                            <th>Tên dịch vụ</th>
                            <th>Thời gian cấp</th>
                            <th>Hạn sử dụng</th>
                            <th>Trạng thái</th>
                            <th>Nguồn cấp</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="value-all" id='value-wait'>
                            <td id="td-1">201001</td>
                            <td id="td-2">Lê Huỳnh Ái Vân</td>
                            <td id="td-3">Khám tim mạch</td>
                            <td id="td-4">14:35 - 07/11/2021</td>
                            <td id="td-5">14:35 - 12/11/2021</td>
                            <td id="td-6">
                                <span className="td-dot" id="tddotbg-1"></span>
                                Đang chờ
                            </td>
                            <td id="td-7">
                                Kiosk
                            </td>
                            <td id="td-7">
                                <Link to="detail" className="table-link">
                                    Chi tiết
                                </Link>
                            </td>
                        </tr>
                        <tr className="value-all" id='value-used'>
                            <td id="td-1">201001</td>
                            <td id="td-2">Lê Huỳnh Ái Vân</td>
                            <td id="td-3">Khám tim mạch</td>
                            <td id="td-4">14:35 - 07/11/2021</td>
                            <td id="td-5">14:35 - 12/11/2021</td>
                            <td id="td-6">
                                <span className="td-dot"></span>
                                Đã sử dụng
                            </td>
                            <td id="td-7">
                                Kiosk
                            </td>
                            <td id="td-7">
                                <Link to="detail" className="table-link">
                                    Chi tiết
                                </Link>
                            </td>
                        </tr>
                        <tr className="value-all" id='value-skip'>
                            <td id="td-1">201001</td>
                            <td id="td-2">Lê Huỳnh Ái Vân</td>
                            <td id="td-3">Khám tim mạch</td>
                            <td id="td-4">14:35 - 07/11/2021</td>
                            <td id="td-5">14:35 - 12/11/2021</td>
                            <td id="td-6">
                                <span className="td-dot" id="tddotbg-2"></span>
                                Bỏ qua
                            </td>
                            <td id="td-7">
                                Kiosk
                            </td>
                            <td id="td-7">
                                <Link to="detail" className="table-link">
                                    Chi tiết
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="number-addpage">
                <PlusSquareFilled className="addpage-icon" />
                <Link to="create" className="addpage-link">
                    Cấp số mới
                </Link>
            </div>
            <div className="pagination">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}
