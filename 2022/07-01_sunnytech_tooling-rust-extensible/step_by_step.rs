// watch --color -n 1 cargo run --color always

fn main() {
    println!("Hello, world!");
}

// ok

/* ****************************************** */

fn main() {
    let who = "world";
    println!("Hello, world!");
}

// ok mais warning who pas utilisé

/* ****************************************** */

fn main() {
    let who = "world";
    println!("Hello, world!", who);
}

// ko error argument never used

/* ****************************************** */

fn main() {
    let who = "world";
    println!("Hello, {}!", who);
}

// ok

/* ****************************************** */

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let who = &args[1];
    println!("Hello, {}!", who);
}

// ok

