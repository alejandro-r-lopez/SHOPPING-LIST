const SUPABASE_URL = 'https://xdcizxdidpizfiibmgtv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2l6eGRpZHBpemZpaWJtZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc4NzYsImV4cCI6MTk4OTgzMzg3Nn0.1AGjiVrmIV6AJNyKnEOyeRjAP87L4_WcL4ZIjmI2sIY';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function getItems() {
    const { data } = await client.from('shopping_list').select('*');
    return data;
}

export async function createItem(item, quantity) {
    const { data } = await client.from('shopping_list').insert([{ item, quantity }]);
    return data;
}
