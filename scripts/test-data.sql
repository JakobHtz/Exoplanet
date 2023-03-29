INSERT INTO Planet (planet_name, x_size, y_size) VALUES
('default', 5, 5),
('large', 10, 10);

INSERT INTO Robot (PID, thread_id, x_pos, y_pos, dir) VALUES
(1, 0, 0, 0, 'NORTH'),
(1, 1, 1, 2, 'EAST'),
(1, 2, 8, 11, 'WEST'),
(1, 3, 4, 7, 'SOUTH');

INSERT INTO PlanetData (RID, PID, scan_timestamp, temp, ground, x_pos, y_pos) VALUES
(1, 1, '2023-02-13 14:33:21', 25.4, 'NICHTS', 0, 0),
(1, 1, '2023-02-13 14:33:21', 26.1, 'WASSER', 1, 0),
(2, 1, '2023-02-13 14:33:21', 26.3, 'LAVA', 1, 1),
(2, 1, '2023-02-13 14:33:21', 26.0, 'GEROELL', 0, 1),
(3, 1, '2023-02-13 14:33:21', 25.8, 'SAND', 2, 0),
(3, 1, '2023-02-13 14:33:21', 25.5, 'FELS', 2, 1),
(4, 1, '2023-02-13 14:33:21', 25.2, 'PFLANZEN', 2, 2),
(4, 1, '2023-02-13 14:33:21', 24.9, 'MORAST', 1, 2);

SELECT * FROM Planet;
SELECT * FROM Robot;
SELECT * FROM PlanetData;

DROP DATABASE exodb;
