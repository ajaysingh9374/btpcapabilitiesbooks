using {managed} from '@sap/cds/common';

namespace my.bookshop;

entity Books : managed {
  key ID     : Integer;
      title  : localized String;
      stock  : Integer;
      price  : Decimal;
      author : Association to Authors;
}

entity Authors : managed {
  key ID          : Integer;
      name        : String;
      dateOfBirth : Date;
      books       : Association to many Books
                      on books.author = $self;
}
