using Microsoft.EntityFrameworkCore;
using backend.Models;
using System;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasData(
                new Book { Id = 1, Title = "Book1", Author = "Author1", ISBN = "ISBN1" },
                new Book { Id = 2, Title = "Book2", Author = "Author2", ISBN = "ISBN2" },
                new Book { Id = 3, Title = "Book3", Author = "Author3", ISBN = "ISBN3" }
            );
        }
    }
}