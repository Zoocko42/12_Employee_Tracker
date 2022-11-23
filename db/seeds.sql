INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Human Resources"),
    ("Upper Management"),
    ("IT");

INSERT INTO role (title, salary, department_id)
VALUES
    ("CEO", 95000.00, 3),
    ("Junior Sales Associate", 35000.00, 1),
    ("Senior Sales Associate", 45000.00, 1),
    ("Sales Manager", 50000.00, 1),
    ("Human Resources Manager", 55000.00, 2),
    ("Junior Developer", 75000.00, 4),
    ("Senior Developer", 85000.00, 4),
    ("Database Manager", 90000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Castaspella", "Wizzard", 1, NULL),
    ("Angela", "Wizzard", 4, NULL),
    ("Micah", "Wizzard", 3, 2),
    ("Glimmah", "Wizzard", 2, 2),
    ("Bow", "Mann", 5, NULL),
    ("Ilia", "Lighthope", 8, NULL),
    ("Mara", "Dearheart", 7, 6),
    ("Adora", "Dearheart", 6, 6);
