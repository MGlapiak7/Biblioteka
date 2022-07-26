﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220725090202_Authors")]
    partial class Authors
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.7");

            modelBuilder.Entity("API.Entities.Author", a =>
                {
                    a.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    a.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    a.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    a.HasKey("Id");

                    a.ToTable("Authors");
                });
#pragma warning restore 612, 618
        }
    }
}
