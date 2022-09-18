import connection from "../Config/postgres";

export async function findTeachers() {
    const { rows: teachers } = await connection.query(
        'select name from teachers'
    )

    return { teachers };
}

export async function findCategories() {
    const { rows: categories } = await connection.query(
        'select name from categories'
    )
    return { categories };
}

export async function findDisciplines() {
    const { rows: disciplines } = await connection.query(
        'select name from disciplines'
    )
    return { disciplines };
}

export async function findTerms() {
    const { rows: terms } = await connection.query(
        'select number from terms'
    )
    return { terms };
}