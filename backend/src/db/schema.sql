CREATE DATABASE IF NOT EXISTS properties_db;
USE properties_db;

CREATE TABLE IF NOT EXISTS properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('House', 'Flat', 'Cottage') NOT NULL,
  image VARCHAR(255) NOT NULL,
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  surface INT NOT NULL,
  address VARCHAR(255) NOT NULL,
  rent INT NOT NULL,
  date VARCHAR(50) NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO properties (type, image, bedrooms, bathrooms, surface, address, rent, date, available) VALUES
  ('House', 'images/house1.jpg', 3, 2, 100, '123 Main Street, Waterloo', 1000, 'Jan 15', FALSE),
  ('Flat', 'images/flat1.jpg', 2, 1, 70, '45 Chesterton Road, Waterloo', 850, 'Feb 1', TRUE),
  ('Cottage', 'images/cottage1.jpg', 4, 2, 120, '18 Hills Road, Waterloo', 1200, 'Mar 10', TRUE),
  ('House', 'images/house2.jpg', 5, 3, 200, '90 Trumpington Road, Waterloo', 2500, 'Apr 5', TRUE),
  ('Flat', 'images/flat2.jpg', 1, 1, 50, '32 Station Road, Waterloo', 750, 'Jan 20', TRUE),
  ('Cottage', 'images/cottage2.jpg', 3, 1, 90, '4 Mill Lane, Waterloo', 1100, 'Feb 15', TRUE),
  ('House', 'images/house3.jpg', 4, 2, 150, '78 Newmarket Road, Waterloo', 1900, 'Mar 12', TRUE),
  ('Flat', 'images/flat3.jpg', 2, 1, 65, '22 Parker''s Piece, Waterloo', 950, 'Jan 25', FALSE),
  ('Cottage', 'images/cottage3.jpg', 3, 2, 95, '3 Green Street, Waterloo', 1300, 'Feb 5', TRUE),
  ('House', 'images/house4.jpg', 6, 4, 250, '12 Queen''s Road, Waterloo', 3000, 'Jan 28', TRUE),
  ('Flat', 'images/flat4.jpg', 1, 1, 45, '11 Sidney Street, Waterloo', 700, 'Feb 20', TRUE),
  ('Cottage', 'images/cottage4.jpg', 2, 1, 80, '16 Green Lane, Waterloo', 950, 'Mar 18', FALSE),
  ('House', 'images/house5.jpg', 3, 2, 120, '29 Trumpington Street, Waterloo', 1700, 'Feb 25', TRUE),
  ('Flat', 'images/flat5.jpg', 2, 2, 80, '8 Downing Street, Waterloo', 1000, 'Jan 30', TRUE),
  ('Cottage', 'images/cottage5.jpg', 4, 2, 130, '5 Bridge Street, Waterloo', 1400, 'Feb 28', TRUE);
