# 🗑️ Image & Product Management Guide

## Deleting Images from Products

### Method 1: Remove Image from Product (Keep Product)
1. Go to CMS: `http://localhost:3333`
2. Click **Product** in sidebar
3. Select the product you want to modify
4. Find the **Product Image** field
5. Click on the image thumbnail
6. Click the **trash/delete icon** (🗑️) at the top of the image editor
7. **Publish** changes

### Method 2: Delete Entire Product
1. Go to CMS: `http://localhost:3333`
2. Click **Product** in sidebar
3. Select the product you want to delete
4. Click the **three dots menu** (⋯) in the top-right corner
5. Select **Delete**
6. Confirm deletion

---

## View Your Products

### Admin Dashboard
Visit `http://localhost:5173/admin` to see all products with their images and delete information.

### CMS Dashboard
Visit `http://localhost:3333` → Click **Product** to see and manage all products.

---

## Bulk Management

### Reorder Products
- Edit any product and change the **Display Order** number
- Lower numbers display first
- Publish to see changes on frontend

### Hide Product Without Deleting
- Edit the product
- Save it but don't publish the changes (keep as draft)
- Product won't appear on frontend but data is preserved

### Copy Product
1. Open product in CMS
2. Click ⋯ menu → **Duplicate**
3. Modify the copy
4. Publish

---

## Quick Access

| Action | Steps |
|--------|-------|
| **Delete Image** | Product → Select → Product Image → Click image → Trash icon |
| **Delete Product** | Product → Select → ⋯ menu → Delete |
| **Change Image** | Product → Select → Product Image → Upload new image |
| **Reorder** | Product → Change Display Order number → Publish |

---

## Troubleshooting

> **Image not deleted?**
- Make sure to **Publish** after deleting the image

> **Product still showing?**
- Clear browser cache and refresh
- Check if product is still **Enabled** in CMS

> **Can't find product?**
- Use CMS search (magnifying glass icon)
- Check if it's in draft status (unpublished)
