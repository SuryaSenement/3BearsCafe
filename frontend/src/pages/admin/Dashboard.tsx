import React, { useEffect, useState } from "react";
import { addMenuItem, getMenuItems, deleteMenuItem } from "../../services/menu.service";
import { addEvent, getEvents, deleteEvent } from "../../services/events.service";
import { uploadImage } from "../../services/storage.service";
import type { MenuItem, EventItem } from "../../types";
import { signOut } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {
    // Menu state
    const [items, setItems] = useState<MenuItem[]>([]);
    const [form, setForm] = useState<Partial<MenuItem>>({
        name: "",
        category: "",
        price: 0,
    });
    const [file, setFile] = useState<File | null>(null);

    // Events state
    const [events, setEvents] = useState<EventItem[]>([]);
    const [eventForm, setEventForm] = useState<Partial<EventItem>>({
        title: "",
        type: "event",
    });

    const loadMenu = async () => {
        try {
            const data = await getMenuItems();
            setItems(data || []);
        } catch (err) {
            console.error("Failed to load menu items:", err);
        }
    };

    const loadEvents = async () => {
        try {
            const data = await getEvents();
            setEvents(data || []);
        } catch (err) {
            console.error("Failed to load events:", err);
        }
    };
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate("/admin/login");
    };


    useEffect(() => {
        loadMenu();
        loadEvents();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let imageUrl = "";
            if (file) {
                imageUrl = await uploadImage(file, "menu");
            }

            await addMenuItem({
                // types cast because backend will add id/created_at
                name: form.name || "",
                category: form.category || "",
                price: Number(form.price) || 0,
                description: form.description,
                image_url: imageUrl,
            } as MenuItem);

            setForm({ name: "", category: "", price: 0 });
            setFile(null);
            await loadMenu();
        } catch (err) {
            console.error("Failed to add menu item:", err);
        }
    };

    const handleDeleteMenu = async (id?: string) => {
        if (!id) return;
        try {
            await deleteMenuItem(id);
            await loadMenu();
        } catch (err) {
            console.error("Failed to delete menu item:", err);
        }
    };

    const handleEventSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let imageUrl = "";
            if (file) {
                imageUrl = await uploadImage(file, "events");
            }

            await addEvent({
                title: eventForm.title || "",
                type: (eventForm.type as "event" | "workshop") || "event",
                date: eventForm.date,
                description: eventForm.description,
                image_url: imageUrl,
            } as EventItem);

            setEventForm({ title: "", type: "event" });
            setFile(null);
            await loadEvents();
        } catch (err) {
            console.error("Failed to add event:", err);
        }
    };

    const handleDeleteEvent = async (id?: string) => {
        if (!id) return;
        try {
            await deleteEvent(id);
            await loadEvents();
        } catch (err) {
            console.error("Failed to delete event:", err);
        }
    };

    return (
        <div className="p-6 space-y-8">
            <button
              onClick={handleLogout}
              className="mb-4 rounded bg-red-600 px-4 py-2 text-white"
            >
              Logout
            </button>

            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            {/* ADD MENU */}
            <section className="bg-white p-4 rounded shadow">
                <h2 className="font-semibold mb-2">Add Menu Item</h2>
                <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                    <input
                        placeholder="Name"
                        className="border p-2 w-full"
                        value={form.name || ""}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                    <input
                        placeholder="Category (Breakfast / Lunch / Drinks)"
                        className="border p-2 w-full"
                        value={form.category || ""}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        className="border p-2 w-full"
                        value={form.price?.toString() ?? ""}
                        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className="border p-2 w-full"
                        value={form.description || ""}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />

                    <button type="submit" className="bg-black text-white px-4 py-2">
                        Add Menu Item
                    </button>
                </form>

                {/* MENU LIST */}
                <div className="grid grid-cols-2 gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="border p-3">
                            {item.image_url && (
                                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                <img src={item.image_url} alt={item.name} className="h-32 w-full object-cover mb-2" />
                            )}
                            <h3 className="font-bold">{item.name}</h3>
                            <p>₹{item.price}</p>
                            <button
                                className="text-red-600 mt-2"
                                onClick={() => handleDeleteMenu(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* EVENTS */}
            <section className="bg-white p-4 rounded shadow">
                <h2 className="font-semibold mb-2">Manage Events / Workshops</h2>

                <form onSubmit={handleEventSubmit} className="space-y-3 mb-6">
                    <input
                        placeholder="Title"
                        className="border p-2 w-full"
                        value={eventForm.title || ""}
                        onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                        required
                    />
                    <select
                        className="border p-2 w-full"
                        value={eventForm.type || "event"}
                        onChange={(e) => setEventForm({ ...eventForm, type: e.target.value as "event" | "workshop" })}
                    >
                        <option value="event">Event</option>
                        <option value="workshop">Workshop</option>
                    </select>
                    <input
                        type="date"
                        className="border p-2 w-full"
                        value={eventForm.date || ""}
                        onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        className="border p-2 w-full"
                        value={eventForm.description || ""}
                        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />

                    <button type="submit" className="bg-black text-white px-4 py-2">
                        Add Event/Workshop
                    </button>
                </form>

                <div className="grid grid-cols-2 gap-4">
                    {events.map((ev) => (
                        <div key={ev.id} className="border p-3">
                            {ev.image_url && (
                                <img src={ev.image_url} alt={ev.title} className="h-32 w-full object-cover mb-2" />
                            )}
                            <h3 className="font-bold">{ev.title}</h3>
                            <p className="text-sm text-gray-600">{ev.type} {ev.date ? `• ${ev.date}` : ""}</p>
                            <p className="mt-1">{ev.description}</p>
                            <button
                                className="text-red-600 mt-2"
                                onClick={() => handleDeleteEvent(ev.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
