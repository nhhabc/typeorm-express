export enum ResponseMessage {
  MissingUsernameAndPassword = 'Bạn cần nhập tên đăng nhập và mật khẩu',
  IncorrectUsernameOrPass = "Tài khoản hoặc mật khẩu không chính xác",
  UserNotFound = "Tên đăng nhập không chính xác",
  PasswordNotMatch = "Mật khẩu xác nhận không khớp",
  ChangedPassword = "Mật khẩu của bạn đã được thay đổi",
  DataFetchingError = "Không thể cập nhật dữ liệu",
  DataCreateError = "Lỗi khởi tạo dữ liệu",
}