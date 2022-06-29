// watch --color -n 1 cargo run --color always

fn main() {
    println!("Hello, world!");
}

// ok

/* ****************************************** */

fn main() {
    let foo = 1;
    println!("Hello, world!");
}

// warning car foo non utilisé

/* ****************************************** */

fn main() {
    let foo = 1;
    println!("Hello, world!", foo);
}

// compile error car le paramètre foo n'est pas utilisé
// + indication du manque de placeholder

/* ****************************************** */

fn main() {
    let foo = 1;
    println!("Hello, {}!", foo);
}

// ok

/* ****************************************** */

fn main() {
    let foo = 1;
    foo = 2;
    println!("Hello, {}!", foo);
}

// compile error car foo n'est pas mutable
// + indication qu'on doit mettre mut pour pouvoir mutter

/* ****************************************** */

fn main() {
    let mut foo = 1;
    foo = 2;
    println!("Hello, {}!", foo);
}

// ok

/* ****************************************** */

fn main() {
    let foo = 1;
    let foo = 2;
    println!("Hello, {}!", foo);
}

// ok

/* ****************************************** */

fn main() {
    let who = "world";
    println!("Hello, {}!", world);
}

// ok

/* ****************************************** */

fn main() {
    let who: String = "world";
    println!("Hello, {}!", who);
}

// compile error car "world" n'est pas une string mais &str

/* ****************************************** */

fn main() {
    let who: String = String::from("world");
    println!("Hello, {}!", who);
}

// ok

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    println!("Hello, {}!", who);
}

// ok (autre possibilité)

/* ****************************************** */

fn main() {
    let who = "world";
    println!("Hello, {}!", who);
}

fn change_who() {
}

// warning : dead code

/* ****************************************** */

fn main() {
    let who = "world";
    change_who();
    println!("Hello, {}!", who);
}

fn change_who() {
}

// ok

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(who);
    println!("Hello, {}!", who);
}

fn change_who() {
    
}

// compile error : expected 0 argument

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(who);
    println!("Hello, {}!", who);
}

fn change_who(who: String) {

}

// compile error : borrow of moved value: `who`

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(who);
    println!("Hello, {}!", who);
}

fn change_who(who: &String) {

}

// compile error : expected &String

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(&who);
    println!("Hello, {}!", who);
}

fn change_who(who: &String) {

}

// ok 

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(&who);
    println!("Hello, {}!", who);
}

fn change_who(who: &String) {
    who.replace_range((0..5), "SFEIR")
}

// compile error : not borrowed as mutable

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(&who);
    println!("Hello, {}!", who);
}

fn change_who(who: &mut String) {
    who.replace_range((0..5), "SFEIR")
}

// compile error : types differ in mutability

/* ****************************************** */

fn main() {
    let who: String = "world".to_string();
    change_who(&mut who);
    println!("Hello, {}!", who);
}

fn change_who(who: &mut String) {
    who.replace_range((0..5), "SFEIR")
}

// compile error : cannot borrow as mutable

/* ****************************************** */

fn main() {
    let mut who: String = "world".to_string();
    change_who(&mut who);
    println!("Hello, {}!", who);
}

fn change_who(who: &mut String) {
    who.replace_range((0..5), "SFEIR")
}

// warning : unecessary parentheses

/* ****************************************** */

fn main() {
    let mut who: String = "world".to_string();
    change_who(&mut who);
    println!("Hello, {}!", who);
}

fn change_who(who: &mut String) {
    who.replace_range(0..5, "SFEIR")
}

// ok
