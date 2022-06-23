using CosmosApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CosmosApp.Controllers
{
    public class PlanetController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PlanetController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Display
        public async Task<IActionResult> Index()
        {
            return View(await _context.Planet.ToListAsync());
        }

        // Create
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Name,Distance")] Planet planet)
        {
            if (ModelState.IsValid)
            {
                _context.Add(planet);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(planet);
        }

        // Edit
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var planet = await _context.Planet.FindAsync(id);
            if (planet == null)
            {
                return NotFound();
            }
            return View(planet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Name,Distance")] Planet planet)
        {
            if (id != planet.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(planet);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PlanetExists(planet.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(planet);
        }

        // Delete
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var planet = await _context.Planet
                .FirstOrDefaultAsync(m => m.ID == id);
            if (planet == null)
            {
                return NotFound();
            }

            return View(planet);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var planet = await _context.Planet.FindAsync(id);
            _context.Planet.Remove(planet);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        private bool PlanetExists(int id)
        {
            return _context.Planet.Any(e => e.ID == id);
        }
    }
}
